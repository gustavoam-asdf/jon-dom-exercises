import { SectionChild } from "./../../../section/SectionContent";
import Audio from "./Audio";
import AudioController from "./AudioController";
import "@styles/components/clock/DigitalAlarm.css";
export default class DigitalAlarm implements SectionChild {
    self: HTMLElement;
    controller: AudioController;
    audio: Audio;
    static className: string;
    constructor();
    clickEvent(evt: any): boolean;
    private template;
}
