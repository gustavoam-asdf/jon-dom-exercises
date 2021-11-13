import Icon from "../Icon";
import Menu from "./Menu";
import MenuItem from "./MenuItem";
import "@styles/components/panel/MenuList";
export default class MenuList {
    self: HTMLElement;
    itemsList: MenuItem[];
    static className: string;
    constructor({ itemsList }: {
        itemsList: MenuItem[];
    });
    clickEvent({ icon, menu }: {
        icon: Icon;
        menu: Menu;
    }): void;
}
