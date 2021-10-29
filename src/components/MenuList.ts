import Icon from './Icon'
import { icons } from './MenuButton'
import MenuItem from './MenuItem'
import Panel from './Panel'
import './styles/MenuList'

const MenuListTemplate = ({
  listItems
}: {
  listItems: MenuItem[]
}): HTMLElement => {
  const list: HTMLElement = document.createElement('nav')
  list.classList.add(MenuList.id)
  list.setAttribute('id', MenuList.id)

  const listFragment: DocumentFragment = document.createDocumentFragment()
  listItems.forEach(listItem => listFragment.append(listItem.self))
  list.append(listFragment)

  return list
}

export default class MenuList {
  public self: HTMLElement
  public listItems: MenuItem[]
  static id: string = 'menu-list'
  constructor({ listItems }: { listItems: MenuItem[] }) {
    this.listItems = listItems
    this.self = MenuListTemplate({ listItems: this.listItems })
  }
  clickEvent({ icon, panel }: { icon: Icon; panel: Panel }) {
    icon.switchIcon(icons.hamburger)
    panel.self.classList.remove('hide')
  }
}
