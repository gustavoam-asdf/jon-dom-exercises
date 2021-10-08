import Header from './components/Header.js'
import MenuList from './components/MenuList.js'
import MenuItem from './components/MenuItem.js'

const App = (): DocumentFragment => {
  const app: DocumentFragment = document.createDocumentFragment()

  const items: HTMLLIElement[] = [MenuItem('Seccion 1')]

  app.prepend(Header)
  app.append(MenuList(items))

  return app
}

export default App()
