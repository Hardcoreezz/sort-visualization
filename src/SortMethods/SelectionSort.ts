import { SortProps } from '../types';
import { swap } from '../utils';
import { ACTIVE_COLOR, INACTIVE_COLOR } from '../constants';

export const SelectionSort = async ({ elements, onIncreaseIteration, onHighlight, stopSort }: SortProps) => {
  const length = elements.length;

  for (let i = 0; i < length - 1; i++) {
    let min = i;

    elements[min].style.background = ACTIVE_COLOR;

    for (let j = i + 1; j < length; j++) {
      if (stopSort.value) {
        throw false;
      }
      onIncreaseIteration();

      await onHighlight(elements[j]);

      if (+elements[j].getAttribute('data-value') < +elements[min].getAttribute('data-value')) {
        elements[min].style.background = INACTIVE_COLOR;
        min = j;
        elements[min].style.background = ACTIVE_COLOR;
      }
    }

    elements[min].style.background = INACTIVE_COLOR;

    const small = elements[min];
    swap(elements[i], elements[min]);
    elements[min] = elements[i];
    elements[i] = small;
  }

  return elements;
}
