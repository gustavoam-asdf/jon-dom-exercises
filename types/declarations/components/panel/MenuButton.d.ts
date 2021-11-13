import Icon from "../Icon";
import Menu from "./Menu";
import "@styles/components/panel/MenuButton.css";
export declare const icons: {
    hamburger: string;
    cross: string;
};
export default class MenuButton {
    self: HTMLElement;
    icon: Icon;
    static className: string;
    constructor(icon?: Icon);
    clickEvent({ menu }: {
        menu: Menu;
    }): void;
}
