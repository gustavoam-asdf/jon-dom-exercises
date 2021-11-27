import { SectionChild } from "../../section/SectionContent"
import Shortcut from "./Shortcut"
import "@styles/components/shortcuts/ShortcutsBox.css"

export default class ShortcutsBox implements SectionChild {
  public self: HTMLDivElement
  static className = "shortcuts-box"
  clickEvent?: (evt: any) => boolean

  constructor() {
    this.self = this.template()
  }

  private template(): HTMLDivElement {
    const shortcutsBox = document.createElement("div")
    shortcutsBox.classList.add(ShortcutsBox.className)
    const shortcuts = [
      new Shortcut("Do something", "ctrl", "alt", "v"),
      new Shortcut("Do another thing", "ctrl", "shift", "w"),
      new Shortcut("Do anything", "win", "alt", "t")
    ]
    const list = document.createDocumentFragment()
    list.append(...shortcuts.map(shortcut => shortcut.self))
    shortcutsBox.append(list)
    return shortcutsBox
  }

  keyboardEvent(evt: KeyboardEvent) {
    console.log(evt)
    return false
  }
}
