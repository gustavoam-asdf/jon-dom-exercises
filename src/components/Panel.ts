import MenuButton, { options } from './MenuButton'
import Menu from './Menu'
import elementIds from '../elementIds'
import './styles/Menu'

const changeIcon = (icon: HTMLSpanElement, state: boolean): void => {
  if (state) {
    icon.classList.remove(options.hamburger)
    icon.classList.add(options.cross)
  } else {
    icon.classList.remove(options.cross)
    icon.classList.add(options.hamburger)
  }
}

const clickOnPanel = (evt: any): void => {
  const button = evt.target.closest(`#${elementIds.panel.button}`)
  if (button) {
    const menu: HTMLElement | null = document.getElementById(
      elementIds.panel.menu.self
    )
    const icon: HTMLSpanElement = button.querySelector(
      `.${elementIds.panel.button}__icon`
    )
    const isOpen = icon?.classList.contains(options.hamburger)
    changeIcon(icon, isOpen)
    menu?.classList.toggle('hide')
    return
  }
}

const Panel = (): HTMLDivElement => {
  const panel: HTMLDivElement = document.createElement('div')
  panel.classList.add(elementIds.panel.self)
  panel.setAttribute('id', elementIds.panel.self)
  const menu: HTMLDivElement = Menu()
  const button = MenuButton()
  panel.append(menu)
  panel.append(button)
  panel.addEventListener('click', clickOnPanel)

  return panel
}

export default Panel
