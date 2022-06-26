import 'regenerator-runtime/runtime';
import { highlightElement } from './utils'
import { SortProps } from './types';
import sortMap from './sortMap';
import { INACTIVE_COLOR, MAX_ELEMENTS_COUNT, SUCCESS_COLOR } from './constants';

class Main {
  private ms = 5;
  private readonly msSpeed: HTMLElement;

  private readonly container: HTMLElement;

  private timerId: number | null = null;
  private readonly timerElement: HTMLElement;

  private readonly iterationElement: HTMLElement;
  private readonly countElement: HTMLInputElement;

  private readonly generateButton: HTMLButtonElement;
  private readonly sortButton: HTMLButtonElement;
  private readonly stopButton: HTMLButtonElement;

  private readonly sortMethodElement: HTMLInputElement;

  private isOscillatorStart = false;

  private stopSortToken = {
    value: false
  };

  private audio: {
    gainNode: GainNode;
    audioContext: AudioContext;
    oscillator: OscillatorNode;
    play: (value: number) => void;
    stop: () => void;
  }

  constructor() {
    this.container = document.getElementById('container');
    this.msSpeed = document.getElementById('msSpeed');
    this.timerElement = document.getElementById('timer');
    this.iterationElement = document.getElementById('iteration');
    this.countElement = document.getElementById('countElements') as HTMLInputElement;
    this.sortMethodElement = document.getElementById('sortMethod') as HTMLInputElement;
    this.generateButton = document.getElementById('generate') as HTMLButtonElement;
    this.sortButton = document.getElementById('sort') as HTMLButtonElement;
    this.stopButton = document.getElementById('stop') as HTMLButtonElement;

    this.init();
  }

  init() {
    const speedInput = document.getElementById('speed') as HTMLInputElement;
    this.setSpeed(+speedInput.value);

    speedInput.addEventListener('input', (e) => this.setSpeed(+(e.target as HTMLInputElement).value));

    this.generateButton.onclick = this.generate.bind(this);
    this.sortButton.onclick = this.sort.bind(this);
    this.stopButton.onclick = () => this.stopSortToken.value = true;

    Object.entries(sortMap).map(([key, value]) => {
      const option = document.createElement('option');
      option.value = key;
      option.innerText = value.name;

      this.sortMethodElement.append(option);
    });
  }

  generate() {
    this.clearInfo();
    this.stopTimer();

    const count = +this.countElement.value;

    this.countElement.classList.remove('error');

    if (!count || count > MAX_ELEMENTS_COUNT) {
      this.countElement.classList.add('error');
      return;
    }

    const widthElement = this.container.getBoundingClientRect().width / count;

    this.container.innerHTML = '';
    for (let i = 0; i < count; i++) {
      const element = document.createElement('span');
      const randomValue = Math.floor(Math.random() * 100);
      element.style.width = widthElement + 'px';
      element.style.height = randomValue + '%';

      element.setAttribute('data-value', String(randomValue));
      element.setAttribute('data-index', String(i));

      this.container.append(element);
    }
  }

  setTimer() {
    let timer = 0;
    this.timerId = setInterval(() => {
      this.timerElement.innerText = `${++timer}`;
    }, 1000);
  }

  stopTimer() {
    clearInterval(this.timerId);
  }

  clearInfo() {
    this.timerElement.innerText = `0`;
    this.iterationElement.innerText = `0`;
  }

  increaseIteration() {
    this.iterationElement.innerText = `${parseInt(this.iterationElement.innerText) + 1}`;
  }

  setSpeed(value: number) {
    this.ms = 100 - value;
    this.msSpeed.innerText = `${this.ms}`;
  }

  async sort() {
    this.setDisableControlButtons(true);
    this.stopSortToken.value = false;

    this.clearInfo();
    this.stopTimer();

    if (!this.isOscillatorStart) {
      const audioContext = new window.AudioContext();
      const oscillator = audioContext.createOscillator();

      const gainNode = audioContext.createGain();
      gainNode.gain.value = 0.02;
      gainNode.connect(audioContext.destination);

      this.audio = {
        audioContext,
        oscillator,
        gainNode,
        play: (value: number) => oscillator.frequency.setValueAtTime(value, audioContext.currentTime),
        stop: () => oscillator.disconnect(gainNode)
      };

      this.isOscillatorStart = true;
      oscillator.start();
    }

    const sortMethod = this.sortMethodElement.value;
    const arrayElements = [...(this.container.children as unknown as HTMLElement[])];

    this.audio.oscillator.connect(this.audio.gainNode);

    const isNeedSort = await this.checkSort(arrayElements);
    if (isNeedSort) {
      this.setTimer();

      const sortProps: SortProps = {
        stopSort: this.stopSortToken,
        elements: arrayElements,
        onHighlight: (element) => highlightElement(element, this.ms, this.audio.play),
        onIncreaseIteration: this.increaseIteration.bind(this),
        container: this.container,
      };

      try {
        const sortedElements = await sortMap[sortMethod].cb(sortProps);
        await this.checkSort(sortedElements);
      } catch (e) {
        this.stopSortToken.value = false;
      }
    }
    this.audio.stop();

    this.stopTimer();
    this.setDisableControlButtons(false);
  }

  async checkSort(elements: HTMLElement[]) {
    const setBlackElements = () => {
      for (const element of elements) {
        element.style.background = INACTIVE_COLOR;
      }
    }
    for (const element of elements) {
      const currentElement = await highlightElement(element, this.ms, this.audio.play);
      if (!currentElement.nextSibling) {
        currentElement.style.background = SUCCESS_COLOR;
        return false;
      }

      const nextElement = await highlightElement(currentElement.nextSibling as HTMLElement, this.ms, this.audio.play);

      const currentValue = parseInt(currentElement.getAttribute('data-value'));
      const nextValue = parseInt(nextElement.getAttribute('data-value'));
      if (currentValue > nextValue) {
        setBlackElements();
        return true;
      } else {
        currentElement.style.background = SUCCESS_COLOR;
        nextElement.style.background = SUCCESS_COLOR;
      }
    }
    return false;
  }

  setDisableControlButtons(disable: boolean) {
    this.generateButton.disabled = disable;
    this.sortButton.disabled = disable;
  }
}

export default new Main();
