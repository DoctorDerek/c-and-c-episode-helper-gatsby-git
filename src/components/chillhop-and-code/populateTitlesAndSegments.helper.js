import _ from "lodash"
import { SHOW_CONSTANTS } from "./CONSTANTS.helper"

const populateTitlesAndSegments = (props) => {
  const titlesAndSegments = {
    FIRST_HOUR: SHOW_CONSTANTS.FIRST_HOUR,
    MAX_HOURS: SHOW_CONSTANTS.MAX_HOURS,
  }

  for (
    let i = titlesAndSegments.FIRST_HOUR;
    i <= titlesAndSegments.MAX_HOURS;
    i++
  ) {
    titlesAndSegments[`titleForHour${i}`] = _.get(
      props,
      `pageContext.frontmatter.titleForHour${i}`,
      null
    )
    titlesAndSegments[`segmentForHour${i}`] = _.get(
      props,
      `pageContext.frontmatter.segmentForHour${i}`,
      null
    )
  }

  return titlesAndSegments
}

export default populateTitlesAndSegments
