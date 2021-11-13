interface Time {
    hours: string;
    minutes: string;
    seconds: string;
    separator: string;
    format?: string;
}
export default class Clock {
    self: HTMLDivElement;
    currTime: Time;
    isShown: boolean;
    static className: string;
    constructor();
    update(): void;
    show(): void;
    hide(): void;
}
export {};
