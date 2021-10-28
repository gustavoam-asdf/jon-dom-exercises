import elementIds from '../elementIds'
import MenuItem from './MenuItem'
import './styles/MenuList'

const MenuListTemplate = (listItems: MenuItem[]): HTMLElement => {
  const list: HTMLElement = document.createElement('nav')
  list.classList.add(elementIds.panel.menu.list)
  list.setAttribute('id', elementIds.panel.menu.list)

  const listFragment: DocumentFragment = document.createDocumentFragment()
  listItems.forEach(listItem => listFragment.append(listItem.self))
  list.append(listFragment)

  return list
}

export default class MenuList {
  public self: HTMLElement
  constructor({ listItems }: { listItems: MenuItem[] }) {
    this.self = MenuListTemplate(listItems)
  }
}
