const IconTemplate = ({
  iconType,
  className,
  id
}: {
  iconType: string
  className: string
  id?: string
}): HTMLSpanElement => {
  const icon: HTMLSpanElement = document.createElement("span")
  id ? icon.setAttribute("id", id) : 0
  icon.classList.add("fas")
  icon.classList.add(iconType)
  className ? icon.classList.add(...className.split(" ")) : 0
  return icon
}

export default class Icon {
  public self: HTMLSpanElement
  public iconType: string
  public className: string

  constructor({
    iconType,
    className,
    id
  }: {
    iconType: string
    className?: string
    id?: string
  }) {
    this.className = className ? className : ""
    this.self = IconTemplate({ iconType, className: this.className, id })
    this.iconType = iconType
  }

  switchIcon(switchableIcon: string): void {
    const { classList } = this.self
    const defaultState = classList.contains(this.iconType)
    defaultState
      ? classList.replace(this.iconType, switchableIcon)
      : classList.replace(switchableIcon, this.iconType)
  }
}
