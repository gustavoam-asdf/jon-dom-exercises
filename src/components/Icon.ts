const IconTemplate = ({
  iconType,
  className,
  id
}: {
  iconType: string,
  className?: string,
  id?: string
}): HTMLSpanElement => {
  const icon: HTMLSpanElement = document.createElement('span')
  id ? icon.setAttribute('id', id) : 0
  icon.classList.add('fas')
  icon.classList.add(iconType)
  className ? icon.classList.add(...className.split(' ')) : 0
  return icon
}

class Icon {
  self: HTMLSpanElement
  iconType: string

  constructor({
    iconType,
    className,
    id
  }: {
    iconType: string,
    className?: string,
    id?: string
  }) {
    this.self = IconTemplate({iconType, className,id})
    this.iconType = iconType
  }

  switchIcon(switchableIcon: string): void {
    const defaultState = this.self.classList.contains(this.iconType)
    if (defaultState) {
      this.self.classList.remove(this.iconType)
      this.self.classList.add(switchableIcon)
    } else {
      this.self.classList.remove(switchableIcon)
      this.self.classList.add(this.iconType)
    }
  }
}

export default Icon
