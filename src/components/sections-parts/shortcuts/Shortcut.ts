export default class Shortcut {
  public self: HTMLDivElement
  public separator = "<span class='separator'>+</span>"
  static className = "shortcut"
  constructor(...keys: string[]) {
    this.self = this.template(...keys)
  }

  private template(...keys: string[]): HTMLDivElement {
    const shortcut = document.createElement("div")
    shortcut.classList.add(Shortcut.className)
    shortcut.innerHTML = keys
      .map((key: string, i: number): string => {
        if (i === keys.length - 1) return `<span class="key">${key}</span>`
        return `<span class="key">${key}</span>${this.separator}`
      })
      .join("")
    return shortcut
  }
}
