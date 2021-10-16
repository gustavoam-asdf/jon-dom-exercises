import Icon from './Icon'
import './styles/MenuButton'

const MenuButton = (): HTMLElement => {
  const button = document.createElement('div')
  button.classList.add('menu-button')

  const hamburger = 'fa-bars'
  const cross = 'fa-times'

  const icon: HTMLSpanElement = Icon({
    iconType: hamburger,
    className: 'menu-button__icon'
  })

  button.append(icon)
  button.addEventListener('click', () => {
    if (icon.classList.contains(hamburger)) {
      icon.classList.remove(hamburger)
      icon.classList.add(cross)
    } else if (icon.classList.contains(cross)) {
      icon.classList.remove(cross)
      icon.classList.add(hamburger)
    }
    console.log('Hola')
  })

  return button
}

export default MenuButton
