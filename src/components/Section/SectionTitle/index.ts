const SectionTitleTemplate = ({
  title,
  id
}: {
  title: string
  id: string
}): HTMLElement => {
  const a: HTMLElement = document.createElement("a")
  a.classList.add(SectionTitle.className)
  a.setAttribute("href", `#${id}`)
  a.innerHTML = `<h2>${title}</h2>`
  return a
}

export default class SectionTitle {
  public self: HTMLElement
  static className = "section-title"

  constructor({
    title = "Título de sección",
    id
  }: {
    title?: string
    id: string
  }) {
    this.self = SectionTitleTemplate({ title, id })
  }
}
