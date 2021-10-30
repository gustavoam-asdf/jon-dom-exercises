const SectionContentTemplate = ({
  children
}: {
  children: HTMLElement[] | HTMLElement | string
}): DocumentFragment => {
  const content = document.createDocumentFragment()
  if (Array.isArray(children)) {
    children.forEach(child => content.appendChild(child))
  } else if (children instanceof HTMLElement) {
    content.appendChild(children)
  } else {
    const tmp = document.createElement('div')
    tmp.outerHTML = children
    content.appendChild(tmp)
  }

  return content
}

export default class SectionContent {
  public self: DocumentFragment
  public children: HTMLElement[] | HTMLElement | string
  constructor({
    children = []
  }: {
    children?: HTMLElement[] | HTMLElement | string
  }) {
    this.children = children
    this.self = SectionContentTemplate({ children: this.children })
  }
}
