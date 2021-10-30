const SectionContentTemplate = ({
  children
}: {
  children?: HTMLElement[] | HTMLElement
}): DocumentFragment => {
  const content = document.createDocumentFragment()
  if (Array.isArray(children)) {
    children.forEach(child => content.appendChild(child))
  } else if (children) {
    content.appendChild(children)
  }

  return content
}

export default class SectionContent {
  public self: DocumentFragment
  constructor({ children }: { children?: HTMLElement[] }) {
    this.self = SectionContentTemplate({ children })
  }
}
