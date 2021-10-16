import elementIds from '../elementIds'
import './styles/MenuList'

const MenuList = (listItems: HTMLAnchorElement[]): HTMLElement => {
  const list: HTMLElement = document.createElement('nav')
  list.classList.add(elementIds.menu.list)
  list.setAttribute('id', elementIds.menu.list)

  const listFragment: DocumentFragment = document.createDocumentFragment()
  listItems.forEach(listItem => listFragment.append(listItem))
  list.append(listFragment)

  return list
}

export default MenuList
