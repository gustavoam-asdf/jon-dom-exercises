export const $ = (container: HTMLElement, selector: string) =>
  container.querySelector(selector) as HTMLElement
