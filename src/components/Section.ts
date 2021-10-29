const SectionTemplate = (): HTMLElement => {
  const section: HTMLElement = document.createElement('section')
  section.classList.add(Section.className)
  return section
}

export default class Section {
  public self: HTMLElement
  static className: string = 'section'

  constructor() {
    this.self = SectionTemplate()
  }
}
