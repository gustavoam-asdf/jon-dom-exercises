import shortcutsList from "@components/sections/ShortcutsSection/shortcutsList"
import KeyCombination from "./KeyCombination"
import "./styles.css"

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
    const shortcuts = shortcutsList
    const list = document.createDocumentFragment()
    list.append(...shortcuts.map(shortcut => shortcut.self))
    shortcutsBox.append(list)
    return shortcutsBox
  }

  keyboardEvent(evt: KeyboardEvent) {
    const {
      metaKey: meta,
      ctrlKey: ctrl,
      shiftKey: shift,
      altKey: alt,
      code
    } = evt
    const auxKeys: AuxiliaryKeys = { meta, ctrl, shift, alt }
    const keyCombinationPressed = new KeyCombination("", code, auxKeys)
    const shortcut = shortcutsList.find(shortcut =>
      shortcut.keyCombination.compare(keyCombinationPressed)
    )
    if (!shortcut) return false
    shortcut.action()
    return true
  }
}
