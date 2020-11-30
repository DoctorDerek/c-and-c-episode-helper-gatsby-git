import { SHOW_CONSTANTS, SEGMENT_LOOKUP } from "./CONSTANTS.helper"

/**
 * @typedef {Object} Chapter
 * @property {string} title - Indicates whether the Courage component is present.
 * @property {string} segment - Indicates whether the Power component is present.
 * @property {string} showPostfix
 * @property {string} hour0Title
 * @property {string} twitchTitle
 * @property {string} youtubeTitle
 * @property {string} segmentDescription
 * @property {string} prefix
 * @property {string} postfix
 * @property {string} showName
 * */

/**
 * returns Map of hour --> Chapter objects
 *
 * @param {Object} props
 * @return {Map<number,Chapter>} ChapterTitleMap
 */
// Input props aren't currently specified:
/* @param {number} props.FIRST_HOUR
 * @param {number} props.MAX_HOURS */
const populateChapterTitleMap = (props) => {
  const { FIRST_HOUR, MAX_HOURS } = props
  // Map each hour # to the content with an ES6 Map
  // instead of an object because I want to iterate
  const chapterTitleMap = new Map()
  // Add hours 0 and 9 for ease of reference:
  chapterTitleMap.set(0, {
    title: SHOW_CONSTANTS.hour0Title,
    segment: "Pre/Post-Presentation",
  })
  for (let i = FIRST_HOUR; i <= MAX_HOURS; i++) {
    chapterTitleMap.set(i, {
      title: props[`titleForHour${i}`],
      segment: props[`segmentForHour${i}`],
    })
  }
  // Post-presentation
  chapterTitleMap.set(MAX_HOURS + 1, {
    title: "hour0",
  })

  for (const [hour, chapter] of chapterTitleMap) {
    if (chapter.segment) {
      // This is object composition (functional programming)
      chapterTitleMap.set(hour, {
        ...chapter,
        ...SEGMENT_LOOKUP[chapter.segment],
        ...SHOW_CONSTANTS,
      })
      // The result is each hour is mapped to an object containing all of the properties it had before (chapter & segment) as well as the looked-up properties (the prefix and postfix) from the lookup literal object. 👍
    }
    // Check for duplicate hours
    if (chapter.title) {
      for (const i of chapterTitleMap.keys()) {
        // Loop through each possible hour
        if (chapter.title.toLocaleLowerCase() === `hour${i}`) {
          chapterTitleMap.set(hour, chapterTitleMap.get(i))
        }
      }
    }
  }

  return chapterTitleMap
}

export default populateChapterTitleMap
