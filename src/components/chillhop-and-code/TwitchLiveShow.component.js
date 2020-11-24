import React from "react"

const TwitchLiveShow = ({
  titleForHour1,
  titleForHour2,
  titleForHour3,
  titleForHour4,
  titleForHour5,
  titleForHour6,
  titleForHour7,
  titleForHour8,
}) => (
  <section key="Twitch Live Show">
    <h2>TWITCH LIVE SHOW</h2>

    <h3>Live Twitch chapter-based categories & titles (140 characters):</h3>

    <h4 key="Label for Hour 0">
      Hour 0 Pre-Presentation: Science & Technology
    </h4>

    <h5 key="Title for Hour 0">
      💙 Chillhop & Code 📺 JavaScript tutorials, coursework & live programming
      over jazzy / lo-fi beats to relax / study to 👉 DoctorDerek.com 👈
    </h5>

    <h4 key="Label for Hour 1">Hour 1 Ask Doctor Derek: Just Chatting</h4>

    <h5 key="Title for Hour 1">
      👨‍⚕️💬🧠 {titleForHour1} ❓ Ask Doctor Derek 💪 Health & Coding 🙋‍♂️ Ask me
      anything 💙 Chillhop & Code 📺
    </h5>

    <h4 key="Label for Hour 2">
      Hours 2 & 6 Let's Learn: Science & Technology
    </h4>

    <h5 key="Title for Hour 2">
      🏫💻🎓 {titleForHour2} 💯 Let's Learn: JavaScript Coursework + Commentary
      💙 Chillhop & Code 📺 relaxing programming
    </h5>

    <h4 key="Label for Hour 3">Hours 3 & 7 Let's Blog: Just Chatting</h4>

    <h5 key="Title for Hour 3">
      👨‍💻📝📘 {titleForHour3} ✍ Let's Blog: JavaScript Tutorials 💙 Chillhop &
      Code 📺 relaxing programming
    </h5>

    <h4 key="Label for Hour 4">
      Hours 4 & 8 Let's Play: Screeps (or Science & Technology)
    </h4>

    <h5 key="Title for Hour 4">
      👾🎮🎰 {titleForHour4} 🎯 Let's Play: JavaScript & CSS Games 💙 Chillhop &
      Code 📺 relaxing programming
    </h5>

    <h4 key="Label for Hour 5">Hour 5 Let's Build Websites: Just Chatting</h4>

    <h5 key="Title for Hour 5">
      🏗️🕸🔥 {titleForHour5} 💸 Let's Build Websites: Real Client Work 💙
      Chillhop & Code 📺 relaxing programming
    </h5>

    <h4 key="Label for Hour 9">
      Hour 9 Post-Presentation: Science & Technology
    </h4>

    <h5 key="Title for Hour 9">
      💙 Chillhop & Code 📺 JavaScript tutorials, coursework & live programming
      over jazzy / lo-fi beats to relax / study to 👉 DoctorDerek.com 👈
    </h5>
  </section>
)

export default TwitchLiveShow
