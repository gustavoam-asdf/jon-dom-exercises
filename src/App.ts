import Header from "./components/Header"
import Panel from "./components/panel/Panel"
import Main from "./components/Main"
import sectionParts from "./utils/sectionParts"
import { clickEvents, keyboardEvents } from "./utils/emitSectionEvents"
import "normalize.css"
import "@styles/index.css"

const App = (): DocumentFragment => {
  const app: DocumentFragment = document.createDocumentFragment()

  const panel = new Panel()
  const main = new Main()

  app.prepend(Header())
  app.append(main.self)
  app.append(panel.self)
  document.addEventListener("click", (evt: any) => {
    clickEvents(panel, sectionParts, evt)
  })
  document.addEventListener("keydown", (evt: KeyboardEvent) => {
    keyboardEvents(sectionParts, evt)
  })
  return app
}

export default App
