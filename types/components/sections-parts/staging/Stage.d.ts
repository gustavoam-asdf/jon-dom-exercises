import { SectionChild } from "../../section/SectionContent";
import Actor from "./Actor";
import "@styles/components/staging/Stage.css";
export default class Stage implements SectionChild {
    self: HTMLDivElement;
    static className: string;
    actor: Actor;
    constructor();
    private template;
    get limits(): DOMRect;
    keyboardEvent(evt: KeyboardEvent): boolean;
}
