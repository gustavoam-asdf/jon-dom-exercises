import Audio from "./Audio";
import "@styles/components/Button.css";
export default class AudioController {
    self: HTMLButtonElement;
    audio: Audio;
    static className: string;
    constructor({ audio, text }: {
        audio: Audio;
        text?: string;
    });
    private template;
    changeText(text: string): void;
}
