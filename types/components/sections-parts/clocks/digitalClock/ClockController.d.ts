/// <reference types="node" />
import Clock from "./Clock";
import "@styles/components/Button.css";
export default class ClockController {
    self: HTMLButtonElement;
    static className: string;
    constructor({ text }: {
        text: string;
    });
    changeText(text: string): void;
    static updater({ clock }: {
        clock: Clock;
    }): NodeJS.Timer;
}
