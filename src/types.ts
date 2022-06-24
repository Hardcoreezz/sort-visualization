export type SortProps = {
  stopSort: {
    value: boolean;
  };
  elements: HTMLElement[];
  onHighlight: (element: HTMLElement) => Promise<HTMLElement>;
  onIncreaseIteration: () => void;
  container: HTMLElement;
}
