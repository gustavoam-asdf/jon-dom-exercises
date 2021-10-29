import '../styles/MenuItem'

const MenuItemTemplate = ({
  href = '#',
  innerHTML
}: {
  href?: string
  innerHTML: string
}): HTMLAnchorElement => {
  const a = document.createElement('a')
  a.classList.add('menu-item')
  a.setAttribute('href', href)
  a.innerHTML = innerHTML
  return a
}

export default class MenuItem {
  public self: HTMLAnchorElement
  constructor({ href = '#', innerHTML }: { href?: string; innerHTML: string }) {
    this.self = MenuItemTemplate({ href, innerHTML })
  }
}
