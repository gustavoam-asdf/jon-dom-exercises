import Icon from '../Icon'
import Menu from './Menu'
import { icons } from './MenuButton'
import MenuItem from './MenuItem'
import './styles/MenuList'

const MenuListTemplate = ({
  listItems
}: {
  listItems: MenuItem[]
}): HTMLElement => {
  const list: HTMLElement = document.createElement('nav')
  list.classList.add(MenuList.className)
  const listFragment: DocumentFragment = document.createDocumentFragment()
  listItems.forEach(listItem => listFragment.append(listItem.self))
  list.append(listFragment)

  return list
}

export default class MenuList {
  public self: HTMLElement
  public listItems: MenuItem[]
  static className: string = 'menu-list'
  constructor({ listItems }: { listItems: MenuItem[] }) {
    this.listItems = listItems
    this.self = MenuListTemplate({ listItems: this.listItems })
  }
  clickEvent({ icon, menu }: { icon: Icon; menu: Menu }) {
    icon.switchIcon(icons.hamburger)
    menu.self.classList.add('hide')
  }
}
