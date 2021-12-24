export const $ = (container: HTMLElement, selector: string) =>
  container.querySelector(selector) as HTMLElement

export const $$ = (container: HTMLElement, selector: string) =>
  container.querySelectorAll(selector) as NodeListOf<HTMLElement>
