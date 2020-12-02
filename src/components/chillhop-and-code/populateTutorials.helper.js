import _ from "lodash"
import { SHOW_CONSTANTS } from "./CONSTANTS.helper"

/**
 *
 * @return {Tutorial}
 */
export const findTutorialInProps = (props, i) => {
  const tutorial = {}
  tutorial.title = _.get(
    props,
    `pageContext.frontmatter.tutorial${i}Title`,
    null
  )
  tutorial.subtitle = _.get(
    props,
    `pageContext.frontmatter.tutorial${i}Subtitle`,
    null
  )
  tutorial.link = _.get(props, `pageContext.frontmatter.tutorial${i}Link`, null)
  if (!i) {
    // empty string
    tutorial.number = 1
  } else {
    tutorial.number = i
  }
  return tutorial
}

/**
 * @typedef {Object} Tutorial
 * @property {string} Tutorial.title
 * @property {string} Tutorial.subtitle
 * @property {string} Tutorial.link
 * @property {number} Tutorial.number
 * @param {*} props
 * @return {Array<Tutorial>}
 */

export const populateTutorials = (props) => {
  const tutorials = []

  // Search for tutorialTitle (etc.) as well as
  // for tutorial1Title (etc. up to MAX_HOURS)

  const defaultTutorial = findTutorialInProps(props, "")
  // Searches for tutorialTitle (no number)
  if (defaultTutorial.title !== null && defaultTutorial.title !== undefined) {
    tutorials.push(defaultTutorial)
  }
  for (let i = SHOW_CONSTANTS.FIRST_HOUR; i <= SHOW_CONSTANTS.MAX_HOURS; i++) {
    const tutorial = findTutorialInProps(props, i)
    if (tutorial.title !== null && tutorial.title !== undefined) {
      tutorials.push(tutorial)
    }
  }

  return tutorials
}

export default populateTutorials
