import { SortProps } from '../types';
import { swap } from '../utils';

const BubbleSort = async ({ elements, onIncreaseIteration, onHighlight, stopSort }: SortProps) => {
  let buffer: HTMLElement;

  for (let j = 0; j < elements.length - 1; j++) {
    for (let i = 0; i < (elements.length - j) - 1; i++) {
      if (stopSort.value) {
        throw false;
      }
      onIncreaseIteration();

      await onHighlight(elements[i]);

      if (
        parseInt(elements[i].getAttribute('data-value')) > parseInt(elements[i + 1].getAttribute('data-value'))
      ) {
        buffer = elements[i];

        swap(elements[i], elements[i + 1]);

        elements[i] = elements[i + 1];
        elements[i + 1] = buffer;
      }
    }
  }

  return elements;
}

export default BubbleSort;
