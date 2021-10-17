import Header from './components/Header'
import Panel from './components/Panel'
import 'normalize.css'
import './components/styles/variables'

const App = (): DocumentFragment => {
  const app: DocumentFragment = document.createDocumentFragment()

  app.prepend(Header())
  app.append(Panel())

  return app
}

export default App
