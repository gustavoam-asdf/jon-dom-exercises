import MenuButton from './MenuButton'
import MenuItem from './MenuItem'
import MenuList from './MenuList'

const Menu = (): HTMLElement => {
  const menu = document.createElement('nav')
  menu.classList.add('menu')

  const button = MenuButton()

  const items: HTMLLIElement[] = [
    MenuItem('Seccion 1'),
    MenuItem('Seccion 2'),
    MenuItem('Seccion 3'),
    MenuItem('Seccion 4'),
    MenuItem('Seccion 5'),
    MenuItem('Seccion 6')
  ]

  const list = MenuList(items)

  menu.append(list)
  menu.append(button)

  return menu
}

export default Menu
