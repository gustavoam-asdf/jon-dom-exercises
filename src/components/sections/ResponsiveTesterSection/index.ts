import SectionContent from "@components/Section/SectionContent"
import ResponsiveTester from "./ResponsiveTester"
import "./styles.css"

export default new SectionContent({
  children: new ResponsiveTester()
})
