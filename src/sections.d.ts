declare interface SectionChild {
  self: HTMLElement
  clickEvent?: EventHandler<MouseEvent>
  keyboardEvent?: EventHandler<KeyboardEvent>
  changeEvent?: EventHandler<Event>
}

declare interface SectionPart {
  id: string
  title: string
  href: string
  content: import("@components/Section/SectionContent").default
}
