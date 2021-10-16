import Header from './components/Header'
import Menu from './components/Menu'
import 'normalize.css'
import './components/styles/variables'

const App = (): DocumentFragment => {
  const app: DocumentFragment = document.createDocumentFragment()

  app.prepend(Header())
  app.append(Menu())

  return app
}

export default App
