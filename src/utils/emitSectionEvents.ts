import { SectionChild } from "@components/section/SectionContent"
import Panel from "@components/panel/Panel"

export function clickEvents(
  panel: Panel,
  sectionParts: (SectionChild | undefined)[],
  evt: MouseEvent
) {
  panel.clickEvent(evt)
  for (const sectionPart of sectionParts) {
    if (!sectionPart) continue
    if (!sectionPart.clickEvent) continue
    const match = sectionPart.clickEvent(evt)
    if (match) break
  }
}

export function keyboardEvents(
  sectionParts: (SectionChild | undefined)[],
  evt: KeyboardEvent
) {
  for (const sectionPart of sectionParts) {
    if (!sectionPart) continue
    if (!sectionPart.keyboardEvent) continue
    const match = sectionPart.keyboardEvent(evt)
    if (match) break
  }
}

export function changeEvents(
  sectionParts: (SectionChild | undefined)[],
  evt: Event
) {
  for (const sectionPart of sectionParts) {
    if (!sectionPart) continue
    if (!sectionPart.changeEvent) continue
    const match = sectionPart.changeEvent(evt)
    if (match) break
  }
}
