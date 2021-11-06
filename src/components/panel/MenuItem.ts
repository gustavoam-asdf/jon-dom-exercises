import "@styles/components/panel/MenuItem"

const MenuItemTemplate = ({
  href = "#",
  innerHTML
}: {
  href?: string
  innerHTML: string
}): HTMLAnchorElement => {
  const a = document.createElement("a")
  a.classList.add(MenuItem.className)
  a.setAttribute("href", href)
  a.innerHTML = innerHTML
  return a
}

export default class MenuItem {
  public self: HTMLAnchorElement
  static className = "menu-item"
  constructor({ href = "#", innerHTML }: { href?: string; innerHTML: string }) {
    this.self = MenuItemTemplate({ href, innerHTML })
  }
}
