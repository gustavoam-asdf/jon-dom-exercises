import MenuItem from "./MenuItem"
import MenuList from "./MenuList"
import list from "../sections-parts/list"
import "./styles/Menu"

const itemsList: MenuItem[] = list.map(
  ({ title, href }) =>
    new MenuItem({
      href,
      innerHTML: `<strong>Sección: </strong>${title}`
    })
)

const MenuTemplate = ({ list }: { list: MenuList }): HTMLDivElement => {
  const menu: HTMLDivElement = document.createElement("div")
  menu.classList.add(Menu.className)
  menu.classList.add("hide")
  menu.append(list.self)
  return menu
}

export default class Menu {
  public self: HTMLDivElement
  public list: MenuList
  static className = "menu"

  constructor() {
    this.list = new MenuList({ itemsList })
    this.self = MenuTemplate({ list: this.list })
  }
}
