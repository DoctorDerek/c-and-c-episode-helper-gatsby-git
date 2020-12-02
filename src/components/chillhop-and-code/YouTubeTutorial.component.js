import React from "react"
import DateWithDayName from "./DateWithDayName.component"

const YouTubeTutorial = ({
  date,
  tutorialTitle,
  tutorialSubtitle,
  tutorialLink,
}) => (
  <section>
    <br />
    <h2>
      YOUTUBE TUTORIAL
      <DateWithDayName date={date} />
    </h2>
    <br />
    <h3>Twitch title (140 characters):</h3>
    <h4>
      👨‍💻📝📘 {tutorialTitle} 💙 Programming Tutorials 👉 DoctorDerek.com 👈
    </h4>

    <h3>YouTube title (100 characters):</h3>
    <h4>👨‍💻📝📘 {tutorialTitle} 🏫💻🎓</h4>

    <h2>
      TUTORIAL DESCRIPTION
      <DateWithDayName date={date} />
    </h2>

    <blockquote>
      {tutorialSubtitle}
      <br />
      <br />
      👀 Read the article at Medium 🎓
      <br />
      {tutorialLink}
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
      👀 Livestreaming weekdays on Twitch 📺 https://twitch.tv/ChillhopAndCode/
      💙
      <br />
      <br />
      About Chillhop & Code: Chillhop & Code teaches JavaScript programming to
      web developers over jazzy / lofi hip hop beats to relax / study to.
      Starring Dr. Derek Austin 🥳 (The physical therapist who writes
      JavaScript) and Computer 🤖 (The Australian rapping robot) 👨‍⚕️💬🧠 Ask me
      anything 👉 DoctorDerek.com 👈
      <br />
    </blockquote>
  </section>
)

export default YouTubeTutorial
