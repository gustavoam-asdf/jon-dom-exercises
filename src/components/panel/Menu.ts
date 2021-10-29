import MenuItem from './MenuItem'
import MenuList from './MenuList'
import sections from '../../Sections'
import './styles/Menu'

const listItems = sections.map(({ title, href }) => {
  return new MenuItem({
    href,
    innerHTML: `<strong>Sección: </strong>${title}`
  })
})

const MenuTemplate = ({ list }: { list: MenuList }): HTMLDivElement => {
  const menu: HTMLDivElement = document.createElement('div')
  menu.classList.add(Menu.className)
  menu.classList.add('hide')
  menu.append(list.self)
  return menu
}

export default class Menu {
  public self: HTMLDivElement
  public list: MenuList
  static className: string = 'menu'

  constructor() {
    this.list = new MenuList({ listItems })
    this.self = MenuTemplate({ list: this.list })
  }
}
