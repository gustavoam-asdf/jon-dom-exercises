import SectionTitle from './SectionTitle'
import './styles/Section'

const SectionTemplate = ({
  id,
  title
}: {
  id: string
  title: SectionTitle
}): HTMLElement => {
  const section: HTMLElement = document.createElement('section')
  section.classList.add(Section.className)
  id ? section.setAttribute('id', id) : 0
  section.appendChild(title.self)
  return section
}

export default class Section {
  public self: HTMLElement
  public title: SectionTitle
  static className: string = 'section'

  constructor({ id, title }: { id: string; title: string }) {
    this.title = new SectionTitle({ id, title })
    this.self = SectionTemplate({ id, title: this.title })
  }
}
