import SectionContent from "@components/section/SectionContent"
import DigitalClock from "./digitalClock/DigitalClock"
import DigitalAlarm from "./alarm/DigitalAlarm"
import "@styles/components/clock/clockPart.css"

export default new SectionContent({
  children: [new DigitalClock(), new DigitalAlarm()]
})
