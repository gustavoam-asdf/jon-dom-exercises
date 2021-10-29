const SectionTitleTemplate = ({
  title,
  id
}: {
  title: string
  id: string
}): HTMLElement => {
  const h2: HTMLElement = document.createElement('h2')
  h2.classList.add(SectionTitle.className)
  h2.innerHTML = `<a href="#${id}" >${title}</a>`
  return h2
}

export default class SectionTitle {
  public self: HTMLElement
  static className: string = 'section-title'

  constructor({
    title = 'Título de sección',
    id
  }: {
    title?: string
    id: string
  }) {
    this.self = SectionTitleTemplate({ title, id })
  }
}
