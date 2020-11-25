import React from "react"

import populateChapterTitleMap from "./populateChapterTitleMap.helper"

const EpisodeDescription = ({ episodeNumber, ...props }) => {
  const chapterTitleMap = populateChapterTitleMap(props)

  /*       
      <br />
      Hour 1 👨‍⚕️💬🧠 Ask Doctor Derek ❓ Health & Coding 💪
      <br />
      ➡️➡️➡️ 💬 Why I LOVE Fluoride But Drink Filtered Water ❓<br />
*/

  return (
    <section key="Episode Description">
      <h2>EPISODE DESCRIPTION</h2>
      <blockquote key="1">
        💙 Chillhop & Code 📺 episode #{episodeNumber} (2020-11-20)
        <br />
        {Array.from(chapterTitleMap.entries()).map(([hour, chapter]) => {
          const { segment, title, prefix, postfix } = chapter

          return (
            <React.Fragment key="Hour {hour}">
              Hour {hour} {prefix} {postfix}
              <br />
              ➡️➡️➡️ {title}
              <br />
            </React.Fragment>
          )
        })}
      </blockquote>
      <blockquote key="2">
        💙 Chillhop & Code 📺 episode #0016 (2020-11-20)
        <br />
        Hour 1 👨‍⚕️💬🧠 Ask Doctor Derek ❓ Health & Coding 💪
        <br />
        ➡️➡️➡️ 💬 Why I LOVE Fluoride But Drink Filtered Water ❓<br />
        Hour 2 🏫💻🎓 Let's Learn: JavaScript Coursework* 💯
        <br />
        ➡️➡️➡️ Commentary on: Complete React Developer by @AndreiNeagoie
        <br />
        Hour 3 👨‍💻📝📘 Let's Blog: JavaScript Tutorials ✍<br />
        ➡️➡️➡️ Topic: Tour of Articles about Technology by Doctor Derek
        <br />
        Hour 4 👾🎮🎰 Let's Play: JavaScript & CSS Games 🎯
        <br />
        ➡️➡️➡️ Let's Play: Sourcery & Nester (HTML & Emmet Games)
        <br />
        Hour 5 🏗️🕸🔥 Let's Build Websites: Real Client Work 💸
        <br />
        ➡️➡️➡️ Let's Build: A Jamstack Site for My Episode Descriptions
        <br />
        Hour 6 🏫💻🎓 Let's Learn: JavaScript Coursework* 💯
        <br />
        ➡️➡️➡️ Commentary on: Complete React Developer by @AndreiNeagoie
        <br />
        Hour 7 👨‍💻📝📘 Let's Blog: JavaScript Tutorials ✍<br />
        ➡️➡️➡️ Topic: Tour of Articles about Technology by Doctor Derek
        <br />
        Hour 8 👾🎮🎰 Let's Play: JavaScript & CSS Games 🎯
        <br />
        ➡️➡️➡️ Let's Play: Sourcery & Nester (HTML & Emmet Games)
        <br />
        <br />
        *Support the course:
        https://www.udemy.com/course/complete-react-developer-zero-to-mastery/
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

export default EpisodeDescription
