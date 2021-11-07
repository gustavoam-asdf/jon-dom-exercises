const SectionContentTemplate = ({
  children
}: {
  children: SectionChild[] | SectionChild
}): DocumentFragment => {
  const content = document.createDocumentFragment()
  if (Array.isArray(children)) {
    children.forEach(child => content.appendChild(child.self))
  } else {
    content.appendChild(children.self)
  }

  return content
}

export interface SectionChild {
  self: HTMLElement
  clickEvent?: (evt: any) => boolean
  keyboardEvent?: (evt: KeyboardEvent) => boolean
}

export default class SectionContent {
  public self: DocumentFragment
  public children: SectionChild[] | SectionChild
  constructor({ children = [] }: { children?: SectionChild[] | SectionChild }) {
    this.children = children
    this.self = SectionContentTemplate({ children: this.children })
  }
}
