import Icons from './Icons'

const MenuButton = (iconClass: string): HTMLElement => {
  const button = document.createElement('div')

  const sr: ShadowRoot = button.attachShadow({ mode: 'closed' })
  // sr.prepend(Icons())
  const icon: HTMLSpanElement = document.createElement('span')

  icon.classList.add('fas')
  icon.classList.add(iconClass)

  sr.append(icon)

  return button
}

export default MenuButton
