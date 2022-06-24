export type SortProps = {
  elements: HTMLElement[];
  onHighlight: (element: HTMLElement) => Promise<HTMLElement>;
  onIncreaseIteration: () => void;
  container: HTMLElement;
}
