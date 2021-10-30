import Header from "./components/Header"
import Panel from "./components/panel/Panel"
import Main from "./components/Main"
import "normalize.css"
import "./index.css"

const App = (): DocumentFragment => {
  const app: DocumentFragment = document.createDocumentFragment()

  const panel = new Panel()
  const main = new Main()

  app.prepend(Header())
  app.append(main.self)
  app.append(panel.self)
  document.addEventListener("click", (evt: any) => {
    panel.clickEvent(evt)
  })
  return app
}

export default App
