export const swap = (node1: HTMLElement, node2: HTMLElement) => {
  const afterNode2 = node2.nextElementSibling;
  const parent = node2.parentNode;
  node1.replaceWith(node2);
  parent.insertBefore(node1, afterNode2);
};

export const highlightElement = async (element: HTMLElement, ms: number, audio: {
  oscillator: OscillatorNode;
  start: () => void;
  stop: () => void;
}) => {
  audio.oscillator.frequency.value = 100 + (+element.getAttribute('data-value') * 10);
  audio.start();
  element.style.background = 'red';
  await timeout(() => {
    element.style.background = 'black';
    audio.stop();
  }, ms);
  return element;
};

export const timeout = (fn: () => any, ms: number) => {
  return new Promise<void>(resolve => setTimeout(() => {
    fn();
    resolve();
  }, ms));
}
