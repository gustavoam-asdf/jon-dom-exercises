import SectionContent from "@components/Section/SectionContent"
import DigitalClock from "./DigitalClock"
import Alarm from "./Alarm"
import "./styles.css"

export default new SectionContent({
	children: [new DigitalClock(), new Alarm()]
})
