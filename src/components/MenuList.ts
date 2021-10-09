import './styles/MenuList'

const MenuList = (listItems: HTMLLIElement[]): HTMLElement => {
  const list: HTMLUListElement = document.createElement('ul')
  list.classList.add('menu-list')

  const listFragment: DocumentFragment = document.createDocumentFragment()
  listItems.forEach(listItem => listFragment.append(listItem))
  list.append(listFragment)

  return list
}

export default MenuList
