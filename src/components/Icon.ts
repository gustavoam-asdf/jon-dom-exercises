const Icon = ({
  iconType,
  className
}: {
  iconType: string
  className?: string
}): HTMLSpanElement => {
  const icon: HTMLSpanElement = document.createElement('span')
  icon.classList.add('fas')
  icon.classList.add(iconType)
  className ? icon.classList.add(...className.split(' ')) : 0
  return icon
}

export default Icon
