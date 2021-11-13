import SectionContent from "./SectionContent";
import SectionTitle from "./SectionTitle";
import "@styles/components/section/Section";
export default class Section {
    self: HTMLElement;
    title: SectionTitle;
    content: SectionContent;
    static className: string;
    constructor({ id, title, content }: {
        id: string;
        title: string;
        content?: SectionContent;
    });
}
