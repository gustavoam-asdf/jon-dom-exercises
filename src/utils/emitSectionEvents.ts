import { SectionChild } from "./../components/section/SectionContent"
import Panel from "./../components/panel/Panel"

export function clickEvents(
  panel: Panel,
  sectionParts: (SectionChild | undefined)[],
  evt: any
) {
  panel.clickEvent(evt)
  for (let i = 0; i < sectionParts.length; i++) {
    const sectionPart = sectionParts[i]
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
  console.log(evt)
  for (let i = 0; i < sectionParts.length; i++) {
    const sectionPart = sectionParts[i]
    if (!sectionPart) continue
    if (!sectionPart.keyboardEvent) continue
    const match = sectionPart.keyboardEvent(evt)
    if (match) break
  }
}
