export default class Audio {
    self: HTMLAudioElement;
    src: string;
    isRinging: boolean;
    constructor({ src }: {
        src: string;
    });
    private template;
    play(): void;
    pause(): void;
}
