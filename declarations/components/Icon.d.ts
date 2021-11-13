export default class Icon {
    self: HTMLSpanElement;
    iconType: string;
    constructor({ iconType, className, id }: {
        iconType: string;
        className?: string;
        id?: string;
    });
    switchIcon(switchableIcon: string): void;
}
