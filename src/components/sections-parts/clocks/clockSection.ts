import SectionContent from "../../section/SectionContent"
import DigitalClock from "./digitalClock/DigitalClock"
import DigitalAlarm from "./alarm/DigitalAlarm"
import "@styles/components/clock/clock.css"

export default new SectionContent({
  children: [new DigitalClock(), new DigitalAlarm()]
})
