import Icon from './Icon'

const MenuButton = (iconClass: string): HTMLElement => {
  const button = document.createElement('div')

  const icon: HTMLSpanElement = Icon('fa-times-circle')

  icon.classList.add('fas')
  icon.classList.add(iconClass)

  button.append(icon)

  return button
}

export default MenuButton
