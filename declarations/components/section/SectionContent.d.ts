export interface SectionChild {
    self: HTMLElement;
    clickEvent?: (evt: any) => boolean;
    keyboardEvent?: (evt: KeyboardEvent) => boolean;
}
export default class SectionContent {
    self: DocumentFragment;
    children: SectionChild[] | SectionChild;
    constructor({ children }: {
        children?: SectionChild[] | SectionChild;
    });
}
