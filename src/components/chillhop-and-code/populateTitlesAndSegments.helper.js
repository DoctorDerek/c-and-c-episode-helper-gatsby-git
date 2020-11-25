import _ from "lodash"

const populateTitlesAndSegments = (props) => {
  const titlesAndSegments = { FIRST_HOUR: 1, MAX_HOURS: 8 }

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
