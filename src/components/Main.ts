import Section from './section/Section'
import sections from '../Sections'
import './styles/Main'

const sectionsList: Section[] = sections.map(
  section => new Section({ id: section.id, title: section.title })
)

const MainTemplate = ({
  sectionsList
}: {
  sectionsList: Section[]
}): HTMLElement => {
  const main = document.createElement('main')
  main.classList.add(Main.className)
  const fragment: DocumentFragment = document.createDocumentFragment()
  sectionsList.forEach(section => fragment.appendChild(section.self))
  main.appendChild(fragment)
  return main
}

export default class Main {
  public self: HTMLElement
  public sectionsList: Section[]
  static className: string = 'main'

  constructor() {
    this.sectionsList = sectionsList
    this.self = MainTemplate({ sectionsList })
  }
}
