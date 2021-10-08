import Header from './components/Header'
import Menu from './components/Menu'
import 'normalize.css'
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'

const App = (): DocumentFragment => {
  const app: DocumentFragment = document.createDocumentFragment()

  app.prepend(Header())
  app.append(Menu())

  return app
}

export default App
