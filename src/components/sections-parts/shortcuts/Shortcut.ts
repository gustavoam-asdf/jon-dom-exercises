import KeyCombination from "./KeyCombination"
export default class Shortcut {
  public self: HTMLDivElement
  public action: (...params: any[]) => void
  static className = "shortcut"

  constructor(
    actionName: string,
    keyCombination: KeyCombination,
    action: (...params: any[]) => void
  ) {
    this.self = this.template(actionName, keyCombination)
    this.action = action
  }

  private template(
    actionName: string,
    keyCombination: KeyCombination
  ): HTMLDivElement {
    const shortcut = document.createElement("div")
    shortcut.classList.add(Shortcut.className)
    shortcut.innerHTML = `
      <div class="keys"> ${keyCombination.representation} </div>
      <span class="action">${actionName}</span>
    `
    return shortcut
  }
}
