import { BubbleSort, CombSort, QuickSort, SelectionSort } from './SortMethods';
import { SortProps } from './types';

interface ISortMap {
  [key: string]: {
    cb: (props: SortProps) => Promise<HTMLElement[]>;
    name: string;
  };
}

const sortMap: ISortMap = {
  quick: {
    cb: QuickSort,
    name: 'Quick sort'
  },
  bubble: {
    cb: BubbleSort,
    name: 'Bubble sort'
  },
  comb: {
    cb: CombSort,
    name: 'Comb sort'
  },
  selection: {
    cb: SelectionSort,
    name: 'Selection sort'
  },
}

export default sortMap;
