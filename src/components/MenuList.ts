const MenuList = (listItems: HTMLLIElement[]): HTMLElement => {
  const menu = document.createElement('nav')

  const list: HTMLUListElement = document.createElement('ul')
  const listFragment: DocumentFragment = document.createDocumentFragment()
  listItems.forEach(listItem => listFragment.append(listItem))
  list.append(listFragment)

  menu.appendChild(list)

  return menu
}

export default MenuList
