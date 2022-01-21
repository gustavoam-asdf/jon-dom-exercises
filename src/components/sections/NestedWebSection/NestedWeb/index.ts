export default class NestedWeb implements SectionChild {
  public self: HTMLDivElement
  static className = "nested-web"

  constructor() {
    this.self = this.template()
  }

  private template() {
    const nestedWeb = document.createElement("div")
    nestedWeb.classList.add(NestedWeb.className)

    return nestedWeb
  }
}
