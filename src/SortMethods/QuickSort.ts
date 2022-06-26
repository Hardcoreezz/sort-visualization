import { SortProps } from '../types';
import { ACTIVE_COLOR, INACTIVE_COLOR } from '../constants';

export const QuickSort = async (props: SortProps) => {
  const { elements, onIncreaseIteration, onHighlight, container, stopSort } = props;

  if (elements.length < 2) return elements;

  const pivot = elements[Math.floor(elements.length / 2)];
  pivot.style.background = ACTIVE_COLOR;
  const pivotIndex = pivot.getAttribute('data-index');

  const less = [];
  const greater = [];
  for (const element of elements) {
    if (stopSort.value) {
      pivot.style.background = INACTIVE_COLOR;
      throw false;
    }

    onIncreaseIteration();
    const value = parseInt(element.getAttribute('data-value'));
    const pivotValue = parseInt(pivot.getAttribute('data-value'));

    const elementIndex = element.getAttribute('data-index');

    if (elementIndex === pivotIndex) continue;

    await onHighlight(element);
    if (value <= pivotValue) less.push(element);
    if (value > pivotValue) greater.unshift(element);
  }

  pivot.style.background = INACTIVE_COLOR;

  less.map(el => {
    el.remove();
    container.insertBefore(el, pivot);
  });

  greater.map(el => {
    el.remove();
    pivot.after(el);
  });

  return [
    ...(await QuickSort({...props, elements: less})),
    pivot,
    ...(await QuickSort({...props, elements: greater}))
  ];
}
