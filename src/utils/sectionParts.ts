import list from "../components/sections-parts/list"

const sectionParts = list
  .map(section => {
    if (Array.isArray(section.content?.children)) {
      return section.content?.children.map(child => {
        return child
      })
    } else {
      return section.content?.children
    }
  })
  .flat(1)

export default sectionParts
