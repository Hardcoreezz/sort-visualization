export const swap = (node1: HTMLElement, node2: HTMLElement) => {
  const afterNode2 = node2.nextElementSibling;
  const parent = node2.parentNode;
  node1.replaceWith(node2);
  parent.insertBefore(node1, afterNode2);
};

export const highlightElement = async (element: HTMLElement, ms: number, playAudio?: (value: number) => void) => {
  element.style.background = 'red';
  playAudio?.(300 + (+element.getAttribute('data-value') * 5));

  await timeout(() => {
    element.style.background = 'black';
  }, ms);

  return element;
};

export const timeout = (fn: () => any, ms: number) => {
  return new Promise<void>(resolve => setTimeout(() => {
    fn();
    resolve();
  }, ms));
}
