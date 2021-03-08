import 'regenerator-runtime/runtime';

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

const sort = async () => {
  const arrayElements = [...container.children];
  const isNeedSort = await checkSort(arrayElements);
  isNeedSort && await quickSort(arrayElements);
}

const checkSort = async (elements) => {
  for (const element of elements) {
    const currentElement = await highlightElement(element);
    if (!currentElement.nextSibling) return false;

    const nextElement = await highlightElement(currentElement.nextSibling);

    const currentValue = parseInt(currentElement.getAttribute('data-value'));
    const nextValue = parseInt(nextElement.getAttribute('data-value'));
    if (currentValue > nextValue) return true;
  }
  return false;
}

const quickSort = async (elements) => {
  if (elements.length < 2) return elements;

  const pivot = elements[Math.floor(elements.length / 2)];
  pivot.style.background = 'red';
  const pivotIndex = pivot.getAttribute('data-index');

  let less = [];
  let greater = [];
  for (const element of elements) {
    const value = parseInt(element.getAttribute('data-value'));
    const pivotValue = parseInt(pivot.getAttribute('data-value'));

    const elementIndex = element.getAttribute('data-index');

    if (elementIndex === pivotIndex) continue;

    await highlightElement(element);
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

const highlightElement = async (element) => {
  element.style.background = 'red';
  await timeout(() => {
    element.style.background = 'black';
  }, MS);
  return element;
};

function timeout(fn, ms) {
  return new Promise(resolve => setTimeout(() => {
    fn();
    resolve();
  }, ms));
}

const generateButton = document.getElementById('generate');
const sortButton = document.getElementById('sort');

const speedInput = document.getElementById('speed');
setSpeed(speedInput.value);

speedInput.addEventListener('input', (e) => setSpeed(e.target.value));

generateButton.onclick = generate;
sortButton.onclick = sort;
