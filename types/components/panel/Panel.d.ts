import MenuButton from "./MenuButton";
import Menu from "./Menu";
import "@styles/components/panel/Panel";
export default class Panel {
    self: HTMLDivElement;
    menu: Menu;
    button: MenuButton;
    static className: string;
    constructor();
    clickEvent(evt: any): boolean;
}
