import Shortcut from "./shortcuts/Shortcut"
import KeyCombination from "./shortcuts/KeyCombination"

const shortcutsList = [
  new Shortcut({
    actionName: "Do something",
    keyCombination: new KeyCombination("v", "KeyV", {
      ctrl: true,
      shift: true
    }),
    action() {
      window.alert("Do something")
    }
  }),
  new Shortcut({
    actionName: "Do something else",
    keyCombination: new KeyCombination("w", "KeyW", {
      ctrl: true,
      alt: true
    }),
    action() {
      window.alert("Do something else")
    }
  }),
  new Shortcut({
    actionName: "Do this",
    keyCombination: new KeyCombination("c", "KeyC", {
      ctrl: true,
      alt: true
    }),
    action() {
      window.alert("Do this")
    }
  })
]

Object.freeze(shortcutsList)

export default shortcutsList
