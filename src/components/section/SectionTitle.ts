const SectionTitleTemplate = ({ title }: { title: string }): HTMLElement => {
  const h2: HTMLElement = document.createElement('h2')
  h2.classList.add(SectionTitle.className)
  h2.innerHTML = title
  return h2
}

export default class SectionTitle {
  public self: HTMLElement
  static className: string = 'section-title'

  constructor({ title = 'Título de sección' }: { title?: string }) {
    this.self = SectionTitleTemplate({ title })
  }
}
