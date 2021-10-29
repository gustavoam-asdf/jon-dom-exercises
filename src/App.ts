import Header from './components/Header'
import Panel from './components/panel/Panel'
import 'normalize.css'
import './index.css'

const App = (): DocumentFragment => {
  const app: DocumentFragment = document.createDocumentFragment()

  const panel = new Panel()

  app.prepend(Header())
  app.append(panel.self)
  document.addEventListener('click', (evt: any) => {
    panel.clickEvent(evt)
  })
  return app
}

export default App
