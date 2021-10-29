import MenuItem from './MenuItem'
import MenuList from './MenuList'
import '../styles/Menu'

const MenuTemplate = ({ list }: { list: MenuList }): HTMLDivElement => {
  const menu: HTMLDivElement = document.createElement('div')
  menu.classList.add(Menu.id)
  menu.setAttribute('id', Menu.id)
  menu.classList.add('hide')
  menu.append(list.self)
  return menu
}

export default class Menu {
  public self: HTMLDivElement
  public list: MenuList
  static id: string = 'menu'

  constructor() {
    this.list = new MenuList({
      listItems: [
        new MenuItem({ href: '#section-1', innerHTML: 'Seccion 1' }),
        new MenuItem({ href: '#section-2', innerHTML: 'Seccion 2' }),
        new MenuItem({ href: '#section-3', innerHTML: 'Seccion 3' }),
        new MenuItem({ href: '#section-4', innerHTML: 'Seccion 4' }),
        new MenuItem({ href: '#section-5', innerHTML: 'Seccion 5' }),
        new MenuItem({ href: '#section-7', innerHTML: 'Seccion 6' })
      ]
    })
    this.self = MenuTemplate({ list: this.list })
  }
}
