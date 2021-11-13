import "@styles/components/panel/MenuItem";
export default class MenuItem {
    self: HTMLAnchorElement;
    static className: string;
    constructor({ href, innerHTML }: {
        href?: string;
        innerHTML: string;
    });
}
