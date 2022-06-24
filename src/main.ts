import 'regenerator-runtime/runtime';
import { highlightElement } from './utils'
import QuickSort from './SortMethods/QuickSort';
import CombSort from './SortMethods/CombSort';
import BubbleSort from './SortMethods/BubbleSort';
import { SortProps } from './types';

class Main {
  private ms = 5;
  private readonly msSpeed: HTMLElement;

  private readonly container: HTMLElement;

  private timerId: number | null = null;
  private readonly timerElement: HTMLElement;

  private readonly iterationElement: HTMLElement;
  private readonly countElement: HTMLInputElement;

  private readonly sortMethodElement: HTMLInputElement;

  private audioContext: AudioContext;
  private oscillator: OscillatorNode;

  private audio: {
    oscillator: OscillatorNode;
    start: () => void;
    stop: () => void;
  }

  constructor() {
    this.container = document.getElementById('container');
    this.msSpeed = document.getElementById('msSpeed');
    this.timerElement = document.getElementById('timer');
    this.iterationElement = document.getElementById('iteration');
    this.countElement = document.getElementById('countElements') as HTMLInputElement;
    this.sortMethodElement = document.getElementById('sortMethod') as HTMLInputElement;

    this.init();
  }

  init() {
    this.audioContext = new window.AudioContext();
    this.oscillator = this.audioContext.createOscillator();

    this.audio = {
      oscillator: this.oscillator,
      start: () => this.oscillator.connect(this.audioContext.destination),
      stop: () => this.oscillator.disconnect(this.audioContext.destination)
    };

    const generateButton = document.getElementById('generate');
    const sortButton = document.getElementById('sort');

    const speedInput = document.getElementById('speed') as HTMLInputElement;
    this.setSpeed(+speedInput.value);

    speedInput.addEventListener('input', (e) => this.setSpeed(+(e.target as HTMLInputElement).value));

    generateButton.onclick = this.generate.bind(this);
    sortButton.onclick = this.sort.bind(this);
  }

  generate() {
    this.clearInfo();
    this.stopTimer();

    const count = +this.countElement.value;

    this.countElement.classList.remove('error');

    if (!count || count > 1000) {
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
    this.clearInfo();
    this.stopTimer();

    const sortMethod = this.sortMethodElement.value;
    const arrayElements = [...(this.container.children as unknown as HTMLElement[])];
    this.oscillator.start();
    const isNeedSort = await this.checkSort(arrayElements);
    if (isNeedSort) {
      this.setTimer();

      const sortProps: SortProps = {
        elements: arrayElements,
        onHighlight: (element) => highlightElement(element, this.ms, this.audio),
        onIncreaseIteration: this.increaseIteration.bind(this),
        container: this.container,
      }

      switch (sortMethod) {
        case 'quick': {
          await QuickSort(sortProps);
          break;
        }
        case 'bubble': {
          await BubbleSort(sortProps);
          break;
        }
        case 'comb': {
          await CombSort(sortProps);
          break;
        }
      }
    }
    await this.checkSort(arrayElements);
    this.oscillator.stop();
    this.stopTimer();
  }
  async checkSort(elements: HTMLElement[]) {
    for (const element of elements) {
      const currentElement = await highlightElement(element, this.ms, this.audio);
      if (!currentElement.nextSibling) return false;

      const nextElement = await highlightElement(currentElement.nextSibling as HTMLElement, this.ms, this.audio);

      const currentValue = parseInt(currentElement.getAttribute('data-value'));
      const nextValue = parseInt(nextElement.getAttribute('data-value'));
      if (currentValue > nextValue) return true;
    }
    return false;
  }
}

export default new Main();
