import SectionTitle from './SectionTitle'
import './styles/Section'

const SectionTemplate = ({
  id,
  title
}: {
  id?: string
  title?: string
}): HTMLElement => {
  const section: HTMLElement = document.createElement('section')
  section.classList.add(Section.className)
  id ? section.setAttribute('id', id) : 0
  const h2: SectionTitle = new SectionTitle({ title })
  section.appendChild(h2.self)
  return section
}

export default class Section {
  public self: HTMLElement
  static className: string = 'section'

  constructor({ id, title }: { id?: string; title: string }) {
    this.self = SectionTemplate({ id, title })
  }
}
