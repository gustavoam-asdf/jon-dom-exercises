declare const list: ({
    id: string;
    title: string;
    href: string;
    content: import("../section/SectionContent").default;
} | {
    id: string;
    title: string;
    href: string;
    content?: undefined;
})[];
export default list;
