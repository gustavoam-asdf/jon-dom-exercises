import { SectionChild } from "../../section/SectionContent"

export default class ShortcutsBox implements SectionChild {
  self: HTMLElement
  clickEvent?: (evt: any) => boolean
  keyboardEvent?: (evt: KeyboardEvent) => boolean
}
