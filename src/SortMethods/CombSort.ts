import { SortProps } from '../types';
import { swap } from '../utils';

const CombSort = async ({ elements, onIncreaseIteration, onHighlight, stopSort }: SortProps) => {
  const factor = 1.3;
  let gapFactor = elements.length / factor;

  while (gapFactor > 1) {
    const gap = Math.round(gapFactor);

    for (let i = 0, j = gap; j < elements.length; i++, j++) {
      if (stopSort.value) {
        throw false;
      }
      onIncreaseIteration();

      await onHighlight(elements[i]);
      await onHighlight(elements[j]);

      if (parseInt(elements[i].getAttribute('data-value')) > parseInt(elements[j].getAttribute('data-value'))) {
        const small = elements[j];

        swap(elements[i], elements[j]);
        elements[j] = elements[i];

        elements[i] = small;
      }
    }
    gapFactor = gapFactor / factor;
  }

  return elements;
}

export default CombSort;
