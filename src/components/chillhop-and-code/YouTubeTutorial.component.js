import React from "react"
import DateWithDayName from "./DateWithDayName.component"

/**
 * @typedef {import('./populateTutorials.helper.js').Tutorial} Tutorial
 * @param {Object} props
 * @param {any} props.date
 * @param {Tutorial} props.tutorial
 */
const YouTubeTutorial = ({ date, tutorial }) => {
  const { title, subtitle, link, number } = tutorial
  return (
    <section key={Math.random()}>
      <br />
      <h2>
        YOUTUBE TUTORIAL #{number}
        <DateWithDayName date={date} />
      </h2>
      <br />
      <h3>Twitch title (140 characters):</h3>
      <h4>👨‍💻📝📘 {title} 💙 Programming Tutorials 👉 DoctorDerek.com 👈</h4>

      <h3>YouTube title (100 characters):</h3>
      <h4>👨‍💻📝📘 {title} 🏫💻🎓</h4>

      <h2>
        TUTORIAL #{number} DESCRIPT.
        <DateWithDayName date={date} />
      </h2>

      <blockquote>
        {subtitle}
        <br />
        <br />
        👀 Read the article at Medium 🎓
        <br />
        {link}
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
        https://DoctorDerek.com/email
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
      </blockquote>
    </section>
  )
}

export default YouTubeTutorial
