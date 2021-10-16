const Icon = ({
  iconType,
  className,
  id
}: {
  iconType: string
  id?: string
  className?: string
}): HTMLSpanElement => {
  const icon: HTMLSpanElement = document.createElement('span')
  id ? icon.setAttribute('id', id) : 0
  icon.classList.add('fas')
  icon.classList.add(iconType)
  className ? icon.classList.add(...className.split(' ')) : 0
  return icon
}

export default Icon
