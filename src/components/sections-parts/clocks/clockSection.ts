import SectionContent from "../../section/SectionContent"
import DigitalClock from "./digitalClock/DigitalClock"
import DigitalAlarm from "./alarm/DigitalAlarm"

export default new SectionContent({
  children: [new DigitalClock(), new DigitalAlarm()]
})
