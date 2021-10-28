import MenuButton, { options } from './MenuButton'
import Menu from './Menu'
import elementIds from '../elementIds'
import './styles/Menu'

const changeIcon = (): void => {
  const icon: HTMLSpanElement = document.querySelector(
    `.${elementIds.panel.button}__icon`
  ) as HTMLSpanElement
  const isOpen = icon.classList.contains(options.hamburger)
  if (isOpen) {
    icon.classList.remove(options.hamburger)
    icon.classList.add(options.cross)
  } else {
    icon.classList.remove(options.cross)
    icon.classList.add(options.hamburger)
  }
}

export const panelClickEvent = (evt: any): void => {
  const clickOnButton =
    evt.target.matches(`#${elementIds.panel.button}`) ||
    evt.target.matches(`#${elementIds.panel.button} *`)
  if (clickOnButton) {
    changeIcon()
    document
      .getElementById(elementIds.panel.menu.self)
      ?.classList.toggle('hide')
    return
  }
  const clickOnMenuItem = evt.target.matches(`#${elementIds.panel.menu.list} *`)
  if (clickOnMenuItem) {
    changeIcon()
    document.getElementById(elementIds.panel.menu.self)?.classList.add('hide')
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

  return panel
}

export default Panel
