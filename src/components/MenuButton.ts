import Icon from './Icon'
import './styles/MenuButton'

const MenuButton = (): HTMLElement => {
  const button = document.createElement('div')
  button.classList.add('menu-button')

  const icon: HTMLSpanElement = Icon({
    iconType: 'fa-bars',
    className: 'menu-button__icon fa-3x'
  })

  button.append(icon)

  return button
}

export default MenuButton
