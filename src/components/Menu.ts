import MenuButton, { options } from './MenuButton'
import MenuItem from './MenuItem'
import MenuList from './MenuList'
import elementIds from '../elementIds'
import './styles/Menu'

const clickOnMenu = (evt: any): void => {
  const button = evt.target.closest(`#${elementIds.menu.button}`)
  if (button) {
    const menu = document.getElementById(elementIds.menu.self)
    const icon = button.querySelector(`.${elementIds.menu.button}__icon`)
    if (icon?.classList.contains(options.hamburger)) {
      icon.classList.remove(options.hamburger)
      icon.classList.add(options.cross)
    } else {
      icon.classList.remove(options.cross)
      icon.classList.add(options.hamburger)
    }
    menu?.classList.toggle('hide')
  }
}

const Menu = (): HTMLElement => {
  const container: HTMLDivElement = document.createElement('div')
  container.classList.add(elementIds.menu.container)
  container.setAttribute('id', elementIds.menu.container)

  const button = MenuButton()

  const items: HTMLAnchorElement[] = [
    MenuItem({ href: '#section-1', innerHTML: 'Seccion 1' }),
    MenuItem({ href: '#section-2', innerHTML: 'Seccion 2' }),
    MenuItem({ href: '#section-3', innerHTML: 'Seccion 3' }),
    MenuItem({ href: '#section-4', innerHTML: 'Seccion 4' }),
    MenuItem({ href: '#section-5', innerHTML: 'Seccion 5' }),
    MenuItem({ href: '#section-7', innerHTML: 'Seccion 6' })
  ]

  const menu: HTMLDivElement = document.createElement('div')
  menu.classList.add(elementIds.menu.self)
  menu.classList.add('hide')
  menu.setAttribute('id', elementIds.menu.self)

  const list = MenuList(items)
  menu.append(list)

  container.append(menu)
  container.append(button)

  container.addEventListener('click', clickOnMenu)

  return container
}

export default Menu
