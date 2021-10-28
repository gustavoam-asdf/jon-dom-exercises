import MenuItem from './MenuItem'
import MenuList from './MenuList'
import elementIds from '../elementIds'
import './styles/Menu'

const Menu = (): HTMLDivElement => {
  const menu: HTMLDivElement = document.createElement('div')
  menu.classList.add(elementIds.panel.menu.self)
  menu.setAttribute('id', elementIds.panel.menu.self)
  menu.classList.add('hide')
  const listItems: MenuItem[] = [
    new MenuItem({ href: '#section-1', innerHTML: 'Seccion 1' }),
    new MenuItem({ href: '#section-2', innerHTML: 'Seccion 2' }),
    new MenuItem({ href: '#section-3', innerHTML: 'Seccion 3' }),
    new MenuItem({ href: '#section-4', innerHTML: 'Seccion 4' }),
    new MenuItem({ href: '#section-5', innerHTML: 'Seccion 5' }),
    new MenuItem({ href: '#section-7', innerHTML: 'Seccion 6' })
  ]
  const list = new MenuList({ listItems })
  menu.append(list.self)
  return menu
}

export default Menu
