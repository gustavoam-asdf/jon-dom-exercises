const Icon = (iconClass: string): HTMLSpanElement => {
  const icon: HTMLSpanElement = document.createElement('span')
  icon.classList.add('fas')
  icon.classList.add(iconClass)
  return icon
}

export default Icon
