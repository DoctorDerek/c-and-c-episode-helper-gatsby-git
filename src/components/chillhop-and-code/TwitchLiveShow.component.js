import React from "react"

import populateChapterTitleMap from "./populateChapterTitleMap.helper"

// Categories alternate every hour to create "chapters" on Twitch
const CATEGORIES = ["Science & Technology", "Just Chatting"]

const TwitchLiveShow = (props) => {
  const chapterTitleMap = populateChapterTitleMap(props)

  return (
    <section key="Twitch Live Show">
      <h2>TWITCH LIVE SHOW</h2>
      <h3>Live Twitch chapter-based categories & titles (140 characters):</h3>
      {Array.from(chapterTitleMap.entries()).map(([hour, chapter]) => {
        const { segment, title, prefix, postfix } = chapter
        // Alternate categories for Twitch
        const category = CATEGORIES[hour % CATEGORIES.length]
        return (
          <section>
            <h4 key="Label for Hour {hour}">
              Hour {hour} {segment}: {category}
            </h4>
            <h5 key="Title for Hour {hour}">
              {prefix} {title} {postfix}
            </h5>
          </section>
        )
      })}
    </section>
  )
}

export default TwitchLiveShow
