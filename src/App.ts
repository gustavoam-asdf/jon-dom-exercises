import Header from "./components/Header"
import Panel from "./components/panel/Panel"
import Main from "./components/Main"
import list from "./components/sections-parts/list"
import "normalize.css"
import "@styles/index.css"

const sectionParts = list
  .map(section => {
    if (Array.isArray(section.content?.children)) {
      return section.content?.children.map(child => {
        return child
      })
    } else {
      return section.content?.children
    }
  })
  .flat(1)

const App = (): DocumentFragment => {
  const app: DocumentFragment = document.createDocumentFragment()

  const panel = new Panel()
  const main = new Main()

  app.prepend(Header())
  app.append(main.self)
  app.append(panel.self)
  document.addEventListener("click", (evt: any) => {
    panel.clickEvent(evt)
    for (let i = 0; i < sectionParts.length; i++) {
      const sectionPart = sectionParts[i]
      if (!sectionPart) continue
      if (!sectionPart.clickEvent) continue
      const match = sectionPart.clickEvent(evt)
      if (match) break
    }
  })
  return app
}

export default App
