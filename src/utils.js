export const swap = (node1, node2) => {
  const afterNode2 = node2.nextElementSibling;
  const parent = node2.parentNode;
  node1.replaceWith(node2);
  parent.insertBefore(node1, afterNode2);
};

export const highlightElement = async (element, ms) => {
  element.style.background = 'red';
  await timeout(() => {
    element.style.background = 'black';
  }, ms);
  return element;
};

export const timeout = (fn, ms) => {
  return new Promise(resolve => setTimeout(() => {
    fn();
    resolve();
  }, ms));
}
