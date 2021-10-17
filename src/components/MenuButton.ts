import elementIds from '../elementIds'
import Icon from './Icon'
import './styles/MenuButton'

export const options = { hamburger: 'fa-bars', cross: 'fa-times' }

const MenuButton = (): HTMLElement => {
  const button = document.createElement('div')
  button.classList.add(elementIds.panel.button)
  button.setAttribute('id', elementIds.panel.button)
  const icon: HTMLSpanElement = Icon({
    iconType: options.hamburger,
    className: `${button.className}__icon`
  })
  button.append(icon)
  return button
}

export default MenuButton
