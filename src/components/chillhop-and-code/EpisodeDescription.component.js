import React from "react"
import DateWithDayName from "./DateWithDayName.component"
import populateChapterTitleMap from "./populateChapterTitleMap.helper"

const EpisodeDescription = ({ episodeNumber, ...props }) => {
  const chapterTitleMap = populateChapterTitleMap(props)
  const { courseLink, date } = props

  /*       
      <br />
      Hour 1 👨‍⚕️💬🧠 Ask Doctor Derek ❓ Health & Coding 💪
      <br />
      ➡️➡️➡️ 💬 Why I LOVE Fluoride But Drink Filtered Water ❓<br />
*/

  return (
    <section key="Episode Description">
      <h2>
        EPISODE DESCRIPTION
        <DateWithDayName date={date} />
      </h2>
      <blockquote>
        💙 Chillhop & Code 📺 episode #{episodeNumber} ({date})
        <br />
        {Array.from(chapterTitleMap.entries()).map(([hour, chapter]) => {
          if (chapter.segment === "Pre/Post-Presentation") {
            return
          }
          // Ask Doctor Derek is different in the episode description
          // compared to the on - air chapter title:
          if (chapter.segment === "Ask Doctor Derek") {
            chapter.segmentDescription = chapter.segment
            chapter.postfix = "❓ Health & Coding 💪"
            chapter.title = `💬 ${chapter.title} ❓`
          }
          if (chapter.segment === "Let's Learn") {
            chapter.segmentDescription = "Let's Learn: JavaScript Coursework*"
          }
          const { title, prefix, postfix, segmentDescription } = chapter
          return (
            <React.Fragment key="Hour {hour}">
              Hour {hour} {prefix} {segmentDescription} {postfix}
              <br />
              ➡️➡️➡️ {title}
              <br />
            </React.Fragment>
          )
        })}
        <br />
        *Support the course: {courseLink}
        (Not an ad)
        <br />
        <br />
        👨‍⚕️💬🧠 Ask me anything 👉 DoctorDerek.com 👈 @ChillhopAndCode 💙
        <br />
        <br />
        👀 Livestreaming weekdays on Twitch 📺
        https://twitch.tv/ChillhopAndCode/ 💙
        <br />
        <br />
        About Chillhop & Code: Chillhop & Code teaches JavaScript programming to
        web developers over jazzy / lofi hip hop beats to relax / study to.
        Starring Dr. Derek Austin 🥳 (The physical therapist who writes
        JavaScript) and Computer 🤖 (The Australian rapping robot) 👨‍⚕️💬🧠 Ask me
        anything 👉 DoctorDerek.com 👈
        <br />
        <br />
        💙 Chillhop & Code on Twitch 📺
        <br />
        https://twitch.tv/ChillhopAndCode/
        <br />
        <br />
        🧠 Read my blog at Medium 🥳
        <br />
        https://DoctorDerek.medium.com
        <br />
        <br />
        📧 Join my email list 🆓
        <br />
        https://DoctorDerek.com/email
        <br />
        ⬆ Get free access to all of my Medium articles 👍
        <br />
        <br />
        🙏 Subscribe to my YouTube channel 💸
        <br />
        https://DoctorDerek.com/YouTube
        <br />
        <br />
        🎶 Music by Chillhop Music 🎧
        <br />
        https://chillhop.ffm.to/creatorcred
        <br />
      </blockquote>
    </section>
  )
}

export default EpisodeDescription
