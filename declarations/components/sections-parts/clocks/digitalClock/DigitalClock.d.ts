import { SectionChild } from "../../../section/SectionContent";
import Clock from "./Clock";
import ClockController from "./ClockController";
import "@styles/components/clock/DigitalClock.css";
export default class DigitalClock implements SectionChild {
    self: HTMLDivElement;
    controller: ClockController;
    clock: Clock;
    private updater?;
    static className: string;
    constructor();
    clickEvent(evt: any): boolean;
}
