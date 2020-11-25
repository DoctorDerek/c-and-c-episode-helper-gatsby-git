import React from "react"

// Categories alternate every hour to create "chapters" on Twitch
const CATEGORIES = ["Science & Technology", "Just Chatting"]

// Object literal to link each hour's segments with the title template
const SEGMENT_LOOKUP = {
  "Ask Doctor Derek": {
    prefix: "👨‍⚕️💬🧠",
    postfix:
      "❓ Ask Doctor Derek 💪 Health & Coding 🙋‍♂️ Ask me anything 💙 Chillhop & Code 📺",
  },
  "Let's Learn": {
    prefix: "🏫💻🎓",
    postfix:
      "💯 Let's Learn: JavaScript Coursework + Commentary 💙 Chillhop & Code 📺 relaxing programming",
  },
  "Let's Blog": {
    prefix: "👨‍💻📝📘",
    postfix:
      "✍ Let's Blog: JavaScript Tutorials 💙 Chillhop & Code 📺 relaxing programming",
  },
  "Let's Play": {
    prefix: "👾🎮🎰",
    postfix:
      "🎯 Let's Play: JavaScript & CSS Games 💙 Chillhop & Code 📺 relaxing programming",
  },
  "Let's Build Websites": {
    prefix: "🏗️🕸🔥",
    postfix:
      "💸 Let's Build Websites: Real Client Work 💙 Chillhop & Code 📺 relaxing programming",
  },
  "Pre/Post-Presentation": {
    prefix: "💙 Chillhop & Code 📺",
    postfix: "👉 DoctorDerek.com 👈",
  },
}

const TwitchLiveShow = (props) => {
  // Map each hour # to the content with an ES6 Map
  // instead of an object because I want to iterate
  const chapterTitleMap = new Map()
  // Add hours 0 and 9 for ease of reference:
  chapterTitleMap.set(0, {
    title: `JavaScript tutorials, coursework & live
        programming over jazzy / lo-fi beats to relax / study to`,
    segment: "Pre/Post-Presentation",
  })
  for (let i = props.FIRST_HOUR; i < props.MAX_HOURS; i++) {
    chapterTitleMap.set(i, {
      title: props[`titleForHour${i}`],
      segment: props[`segmentForHour${i}`],
    })
  }
  chapterTitleMap.set(9, { title: "hour0" })

  for (const [hour, chapter] of chapterTitleMap) {
    if (chapter.segment) {
      // This is object composition (functional programming)
      chapterTitleMap.set(hour, {
        ...chapter,
        ...SEGMENT_LOOKUP[chapter.segment],
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
