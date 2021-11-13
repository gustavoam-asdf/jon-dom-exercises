import { SectionChild } from "../../section/SectionContent"
import Shortcut from "./Shortcut"
import "@styles/components/shortcuts/ShortcutsBox.css"

export default class ShortcutsBox implements SectionChild {
  public self: HTMLDivElement
  static className = "shortcuts-box"
  clickEvent?: (evt: any) => boolean
  keyboardEvent?: (evt: KeyboardEvent) => boolean

  constructor() {
    this.self = this.template()
  }

  private template(): HTMLDivElement {
    const shortcutsBox = document.createElement("div")
    shortcutsBox.classList.add(ShortcutsBox.className)
    const shortcuts = [
      new Shortcut("ctrl", "alt", "v"),
      new Shortcut("ctrl", "shift", "w"),
      new Shortcut("win", "t")
    ]
    const list = document.createDocumentFragment()
    list.append(...shortcuts.map(shortcut => shortcut.self))
    shortcutsBox.append(list)
    return shortcutsBox
  }
}
