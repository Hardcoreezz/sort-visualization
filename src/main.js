import 'regenerator-runtime/runtime';
import {highlightElement, swap} from './utils.js'

const container = document.getElementById('container');
const msSpeed = document.getElementById('msSpeed');

let MS = 5;

const generate = () => {
  const countElement = document.getElementById('countElements');
  const count = countElement.value;

  countElement.classList.remove('error');

  if (!count || count > 1000) {
    countElement.classList.add('error');
    return;
  }

  const widthElement = container.getBoundingClientRect().width / count;

  container.innerHTML = '';
  for (let i = 0; i < count; i++) {
    const element = document.createElement('span');
    const randomValue = Math.floor(Math.random() * 100);
    element.style.width = widthElement + 'px';
    element.style.height = randomValue + '%';

    element.setAttribute('data-value', String(randomValue));
    element.setAttribute('data-index', String(i));

    container.append(element);
  }
}

const setSpeed = (value) => {
  MS = 100 - value;
  msSpeed.innerText = `${MS}`;
}

let timerId = null;
const timerElement = document.getElementById('timer');
const iterationElement = document.getElementById('iteration');

const setTimer = () => {
  let timer = 0;
  timerId = setInterval(() => {
    timerElement.innerText = `${++timer}`;
  }, 1000);
}
const stopTimer = () => {
  clearInterval(timerId);
}
const clearInfo = () => {
  timerElement.innerText = `0`;
  iterationElement.innerText = `0`;
}
const increaseIteration = () => {
  iterationElement.innerText = String(parseInt(iterationElement.innerText) + 1);
}

const sort = async () => {
  clearInfo();
  setTimer();

  const sortType = document.getElementById('sortType').value;
  const arrayElements = [...container.children];
  const isNeedSort = await checkSort(arrayElements);
  switch (sortType) {
    case 'quick': {
      isNeedSort && await quickSort(arrayElements);
      break;
    }
    case 'bubble': {
      isNeedSort && await bubbleSort(arrayElements);
      break;
    }
    case 'comb': {
      isNeedSort && await combSort(arrayElements);
      break;
    }
  }
  stopTimer();
}

const checkSort = async (elements) => {
  for (const element of elements) {
    const currentElement = await highlightElement(element, MS);
    if (!currentElement.nextSibling) return false;

    const nextElement = await highlightElement(currentElement.nextSibling, MS);

    const currentValue = parseInt(currentElement.getAttribute('data-value'));
    const nextValue = parseInt(nextElement.getAttribute('data-value'));
    if (currentValue > nextValue) return true;
  }
  return false;
}

const combSort = async (elements) => {
  const factor = 1.3;
  let gapFactor = elements.length / factor;

  while (gapFactor > 1) {
    const gap = Math.round(gapFactor);

    for (let i = 0, j = gap; j < elements.length; i++, j++) {
      increaseIteration();

      highlightElement(elements[i], MS);
      await highlightElement(elements[j], MS);

      if (parseInt(elements[i].getAttribute('data-value')) > parseInt(elements[j].getAttribute('data-value'))) {
        const small = elements[j];

        swap(elements[i], elements[j]);
        elements[j] = elements[i];

        elements[i] = small;
      }
    }
    gapFactor = gapFactor / factor;
  }
}

const bubbleSort = async (elements) => {
  let buffer;

  for (let j = 0; j < elements.length - 1; j++) {
    for (let i = 0; i < (elements.length - j) - 1; i++) {
      increaseIteration();

      await highlightElement(elements[i], MS);

      if (parseInt(elements[i].getAttribute('data-value')) > parseInt(elements[i + 1].getAttribute('data-value'))) {
        buffer = elements[i];

        swap(elements[i], elements[i + 1]);

        elements[i] = elements[i + 1];
        elements[i + 1] = buffer;
      }
    }
  }
}

const quickSort = async (elements) => {
  if (elements.length < 2) return elements;

  const pivot = elements[Math.floor(elements.length / 2)];
  pivot.style.background = 'red';
  const pivotIndex = pivot.getAttribute('data-index');

  let less = [];
  let greater = [];
  for (const element of elements) {
    increaseIteration();
    const value = parseInt(element.getAttribute('data-value'));
    const pivotValue = parseInt(pivot.getAttribute('data-value'));

    const elementIndex = element.getAttribute('data-index');

    if (elementIndex === pivotIndex) continue;

    await highlightElement(element, MS);
    if (value <= pivotValue) less.push(element);
    if (value > pivotValue) greater.unshift(element);
  }

  pivot.style.background = 'black';

  less.map(el => {
    el.remove();
    container.insertBefore(el, pivot);
  });

  greater.map(el => {
    el.remove();
    pivot.after(el);
  });

  return [...(await quickSort(less)), pivot, ...(await quickSort(greater))];
}

const generateButton = document.getElementById('generate');
const sortButton = document.getElementById('sort');

const speedInput = document.getElementById('speed');
setSpeed(speedInput.value);

speedInput.addEventListener('input', (e) => setSpeed(e.target.value));

generateButton.onclick = generate;
sortButton.onclick = sort;
