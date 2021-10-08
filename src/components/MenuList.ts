const MenuList = (listItems: HTMLLIElement[]): HTMLElement => {
  const menu = document.createElement('nav')
  const sr: ShadowRoot = menu.attachShadow({ mode: 'closed' })

  const list: HTMLUListElement = document.createElement('ul')
  const listFragment: DocumentFragment = document.createDocumentFragment()
  listItems.forEach(listItem => listFragment.append(listItem))
  list.append(listFragment)

  sr.append(list)

  return menu
}

export default MenuList
