import MenuItem from './MenuItem'
import MenuList from './MenuList'
import elementIds from '../elementIds'
import './styles/Menu'

const Menu = (): HTMLDivElement => {
  const menu: HTMLDivElement = document.createElement('div')
  menu.classList.add(elementIds.panel.menu.self)
  menu.setAttribute('id', elementIds.panel.menu.self)
  menu.classList.add('hide')
  const items: HTMLAnchorElement[] = [
    MenuItem({ href: '#section-1', innerHTML: 'Seccion 1' }),
    MenuItem({ href: '#section-2', innerHTML: 'Seccion 2' }),
    MenuItem({ href: '#section-3', innerHTML: 'Seccion 3' }),
    MenuItem({ href: '#section-4', innerHTML: 'Seccion 4' }),
    MenuItem({ href: '#section-5', innerHTML: 'Seccion 5' }),
    MenuItem({ href: '#section-7', innerHTML: 'Seccion 6' })
  ]
  const list = MenuList(items)
  menu.append(list)
  return menu
}

export default Menu
