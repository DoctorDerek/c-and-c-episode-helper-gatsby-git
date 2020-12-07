import React from "react"
import DateWithDayName from "./DateWithDayName.component"

import populateChapterTitleMap from "./populateChapterTitleMap.helper"

// Categories alternate every hour to create "chapters" on Twitch
const CATEGORIES = ["Science & Technology", "Just Chatting"]

const TwitchLiveShow = ({ date, ...props }) => {
  const chapterTitleMap = populateChapterTitleMap(props)
  let categoryToggle = 1 // starts at 1
  let lastSegment

  return (
    <section key="Twitch Live Show">
      <h2>
        TWITCH LIVE SHOW
        <DateWithDayName date={date} />
      </h2>
      <h3>Live Twitch chapter-based categories & titles (140 characters):</h3>
      {Array.from(chapterTitleMap.entries()).map(([hour, chapter]) => {
        const {
          segment,
          title,
          prefix,
          postfix,
          segmentDescription,
          showName,
          showDescription,
        } = chapter
        // Alternate categories for Twitch
        if (lastSegment !== segment) {
          categoryToggle += 1
        }
        const category = CATEGORIES[categoryToggle % CATEGORIES.length]
        lastSegment = segment
        return (
          <section>
            <h4 key="Label for Hour {hour}">
              Hour {hour} {segment}: {category}
            </h4>
            <h5 key="Title for Hour {hour}">
              {prefix} {title} {postfix} {segmentDescription} {showName}{" "}
              {showDescription}
            </h5>
          </section>
        )
      })}
    </section>
  )
}

export default TwitchLiveShow
