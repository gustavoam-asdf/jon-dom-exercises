export default class Shortcut {
  public self: HTMLDivElement
  public separator = "<span class='separator'></span>"
  static className = "shortcut"
  constructor(action: string, ...keys: string[]) {
    this.self = this.template(action, ...keys)
  }

  private template(action: string, ...keys: string[]): HTMLDivElement {
    const shortcut = document.createElement("div")
    shortcut.classList.add(Shortcut.className)
    shortcut.innerHTML = `
      <div class="keys">
        ${keys
          .map((key: string, i: number): string => {
            if (i === keys.length - 1) return `<span class="key">${key}</span>`
            return `<span class="key">${key}</span>${this.separator}`
          })
          .join("")}
      </div>
      <span class="action">${action}</span>
    `
    return shortcut
  }
}
