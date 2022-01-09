import Icon from "../../Icon"
import Menu from "../Menu"
import { icons } from "../MenuButton"
import MenuItem from "../MenuItem"
import "./index.css"

const MenuListTemplate = ({
  itemsList
}: {
  itemsList: MenuItem[]
}): HTMLElement => {
  const list: HTMLElement = document.createElement("nav")
  list.classList.add(MenuList.className)
  list.classList.add("hide")
  const listFragment: DocumentFragment = document.createDocumentFragment()
  itemsList.forEach(listItem => listFragment.append(listItem.self))
  list.append(listFragment)

  return list
}

export default class MenuList {
  public self: HTMLElement
  public itemsList: MenuItem[]
  static className = "menu-list"
  constructor({ itemsList }: { itemsList: MenuItem[] }) {
    this.itemsList = itemsList
    this.self = MenuListTemplate({ itemsList: this.itemsList })
  }
  clickEvent({ icon, menu }: { icon: Icon; menu: Menu }) {
    icon.switchIcon(icons.cross)
    this.self.classList.add("hide")
    menu.self.classList.add("hide")
  }
}
