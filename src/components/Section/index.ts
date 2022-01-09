import SectionContent from "./SectionContent"
import SectionTitle from "./SectionTitle"
import "./index.css"

const SectionTemplate = ({
  id,
  title,
  content
}: {
  id: string
  title: SectionTitle
  content: SectionContent
}): HTMLElement => {
  const section: HTMLElement = document.createElement("section")
  section.classList.add(Section.className)
  id ? section.setAttribute("id", id) : 0
  section.appendChild(title.self)
  content ? section.appendChild(content.self) : 0
  return section
}

export default class Section {
  public self: HTMLElement
  public title: SectionTitle
  public content: SectionContent
  static className = "section"

  constructor({
    id,
    title,
    content = new SectionContent({ children: [] })
  }: {
    id: string
    title: string
    content?: SectionContent
  }) {
    this.title = new SectionTitle({ id, title })
    this.content = content
    this.self = SectionTemplate({
      id,
      title: this.title,
      content: this.content
    })
  }
}
