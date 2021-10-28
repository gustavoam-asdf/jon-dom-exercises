import Header from './components/Header'
import Panel, { panelClickEvent } from './components/Panel'
import 'normalize.css'
import './index.css'
import elementIds from './elementIds'

const clickEvent = (evt: any): void => {
  const clickOnPanel =
    evt.target.matches(`#${elementIds.panel.self}`) ||
    evt.target.matches(`#${elementIds.panel.self} *`)
  if (clickOnPanel) {
    panelClickEvent(evt)
    return
  }
}

const App = (): DocumentFragment => {
  const app: DocumentFragment = document.createDocumentFragment()

  app.prepend(Header())
  app.append(Panel())
  document.addEventListener('click', clickEvent)
  return app
}

export default App
