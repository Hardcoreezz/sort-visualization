import 'regenerator-runtime/runtime'

const container = document.getElementById('container');

const generate = () => {
  const countElements = document.getElementById('countElements').value;

  if (!countElements || countElements > 1000) return;

  const widthElement = container.getBoundingClientRect().width / countElements;

  container.innerHTML = '';
  for (let i = 0; i < countElements; i++) {
    const element = document.createElement('span');
    const randomValue = Math.floor(Math.random() * 100);
    element.style.width = widthElement + 'px';
    element.style.height = randomValue + '%';

    element.setAttribute('data-value', String(randomValue));
    element.setAttribute('data-index', String(i));

    container.append(element);
  }
}
const sort = async () => {
  const arrayElements = [...container.children]
  quickSort(arrayElements);
}

const quickSort = async (array) => {
  if (array.length < 2) return array;

  const pivot = await getElementByIndex(array, Math.floor(Math.random() * array.length));

  const less = array.filter(async (el, index) => {
    return array[await getElementByIndex(array, index)].getAttribute('data-value') < await getElement(pivot).getAttribute('data-value')
  });

  const greater = array.filter(async (el, index) => {
    return array[await getElementByIndex(array, index)].getAttribute('data-value') > await getElement(pivot).getAttribute('data-value')
  });

  less.map(el => {
    container.removeChild(el);
    pivot.insertAdjacentHTML('beforebegin', el.outerHTML)
  })
  greater.map(el => {
    container.removeChild(el);
    pivot.insertAdjacentHTML('afterend', el.outerHTML)
  })

  return [await quickSort(less), array[pivot], await quickSort(greater)];
}

const getElementByIndex = async (array, index) => {
  array[index].style.background = 'red';
  await timeout(() => {
    array[index].style.background = 'black';
  }, 0);
  return array[index];
}
const getElement = async (element) => {
  element.style.background = 'red';
  await timeout(() => {
    element.style.background = 'black';
  }, 0);
  return element;
}

function timeout(fn, ms) {
  return new Promise(resolve => setTimeout(() => {
    fn()
    resolve()
  }, ms));
}

const generateButton = document.getElementById('generate');
const sortButton = document.getElementById('sort');

generateButton.onclick = generate;
sortButton.onclick = sort;
