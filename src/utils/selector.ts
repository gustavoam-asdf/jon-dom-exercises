export const $ = <T extends HTMLElement>(
  container: HTMLElement,
  selector: string
) => container.querySelector(selector) as T

export const $$ = (container: HTMLElement, selector: string) =>
  container.querySelectorAll(selector) as NodeListOf<HTMLElement>
