import React from "react"
import populateChapterTitleMap from "./populateChapterTitleMap.helper"

const ADDHighlights = (props) => {
  const chapterTitleMap = populateChapterTitleMap(props)
  const { date, episodeNumber } = props
  const askDoctorDerekChapter = chapterTitleMap.get(0)
  // TODO
  // {Array.from(chapterTitleMap.entries()).map(([hour, chapter]) => {
  /*Array.from(chapterTitleMap.values()).find(
    (chapter) => {
      console.log(chapter)
      return chapter.segment === "Ask Doctor Derek"
    }
  )*/
  const { prefix, title, postfix, segment } = askDoctorDerekChapter

  return (
    <section>
      <br />
      <h2>ADD HIGHLIGHTS</h2>
      <br />
      <h3>Twitch title (140 characters):</h3>
      <br />
      <h4>
        {prefix} {title} {postfix} {segment} 💪 {date} 💙 Health & Coding 👉
        DoctorDerek.com 👈
      </h4>
      <br />
      <h3>YouTube title (100 characters):</h3>
      <br />
      <h4>
        {prefix} {title} {postfix} {segment} 💪 {date}
      </h4>
      <br />
      <blockquote>
        Ask Doctor Derek episode #{episodeNumber} ({date})
        <br />
        {prefix} {title} {postfix}
        <br />
        <br />
        About Dr. Derek Austin 🥳:
        <br />
        💪 The physical therapist who writes JavaScript
        <br />
        🤓 Web Developer
        <br />
        😎 Mentor
        <br />
        🧠 Doctor of Physical Therapy
        <br />
        🎓 Bootcamp Instructor
        <br />
        😄 SEO Expert
        <br />
        😁 React Programmer
        <br />
        😆 Jamstack Enthusiast
        <br />
        <br />
        👨‍⚕️💬🧠 Ask me anything 👉 DoctorDerek.com 👈 @AskDoctorDerek 💙
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
        https://DoctorDerek.Medium.com
        <br />
        <br />
        📧 Join my email list 🆓
        <br />
        https://tinyletter.com/DoctorDerek
        <br />
        ⬆ Get free access to all of my Medium articles 👍
        <br />
        <br />
        🙏 Support me on Patreon 💸
        <br />
        https://patreon.com/DoctorDerek
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
export default ADDHighlights
