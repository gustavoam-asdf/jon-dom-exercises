import Header from "@components/Header"
import Panel from "@components/Panel"
import Main from "@components/Main"
import sectionParts from "@utils/sectionParts"
import {
  changeEvents,
  clickEvents,
  keyboardEvents
} from "@utils/emitSectionEvents"
import "@styles/index.css"
import "normalize.css"

const App = (): DocumentFragment => {
  const app = document.createDocumentFragment()

  const panel = new Panel()
  const main = new Main()
  app.prepend(Header())
  app.append(main.self)
  app.append(panel.self)
  document.addEventListener("click", (evt: MouseEvent) => {
    clickEvents(panel, sectionParts, evt)
  })
  document.addEventListener("keydown", (evt: KeyboardEvent) => {
    keyboardEvents(sectionParts, evt)
  })
  document.addEventListener("change", (evt: Event) => {
    changeEvents(sectionParts, evt)
  })
  return app
}

export default App
