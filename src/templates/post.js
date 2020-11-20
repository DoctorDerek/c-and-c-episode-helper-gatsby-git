import React from "react"
import _ from "lodash"
import moment from "moment-strftime"
import { graphql } from "gatsby"

import { Layout } from "../components/index"
import HeaderAlt from "../components/HeaderAlt"
import Header from "../components/Header"
import { htmlToReact } from "../utils"
import Footer from "../components/Footer"

// this minimal GraphQL query ensures that when 'gatsby develop' is running,
// any changes to content files are reflected in browser
export const query = graphql`
  query($url: String) {
    sitePage(path: { eq: $url }) {
      id
    }
  }
`

const Post = (props) => {
  return (
    <Layout {...props}>
      {_.get(props, "pageContext.frontmatter.hide_header", null) === true ? (
        <HeaderAlt {...props} />
      ) : (
        <Header
          {...props}
          site={props.pageContext.site}
          page={props.pageContext}
          image={_.get(props, "pageContext.frontmatter.content_img_path", null)}
        />
      )}
      <div id="content" className="site-content">
        <main id="main" className="site-main inner">
          <article className="post post-full">
            <header className="post-header">
              <h1 className="post-title">
                {_.get(props, "pageContext.frontmatter.title", null)}
              </h1>
              <div className="post-meta">
                Published on{" "}
                <time
                  className="published"
                  dateTime={moment(
                    _.get(props, "pageContext.frontmatter.date", null)
                  ).strftime("%Y-%m-%d %H:%M")}
                >
                  {moment(
                    _.get(props, "pageContext.frontmatter.date", null)
                  ).strftime("%B %d, %Y")}
                </time>
              </div>
            </header>
            {_.get(props, "pageContext.frontmatter.subtitle", null) && (
              <div className="post-subtitle">
                {htmlToReact(
                  _.get(props, "pageContext.frontmatter.subtitle", null)
                )}
              </div>
            )}
            <div className="post-content">
              {htmlToReact(_.get(props, "pageContext.html", null))}
              ~~ FRIDAY 2020-11-20 ~~ TWITCH LIVE SHOW Live Twitch chapter-based
              categories & titles (140 characters): Hour 0 Pre-Presentation:
              Science & Technology 💙 Chillhop & Code 📺 JavaScript tutorials,
              coursework & live programming over jazzy / lo-fi beats to relax /
              study to 👉 DoctorDerek.com 👈 Hour 1 Ask Doctor Derek: Just
              Chatting 👨‍⚕️💬🧠 Why I LOVE Fluoride But Drink Filtered Water ❓
              Ask Doctor Derek 💪 Health & Coding 🙋‍♂️ Ask me anything 💙 Chillhop
              & Code 📺 Hours 2 & 6 Let's Learn: Science & Technology 🏫💻🎓
              Commentary on: Complete React Developer by @AndreiNeagoie 💯 Let's
              Learn: JavaScript Coursework + Commentary 💙 Chillhop & Code 📺
              relaxing programming Hours 3 & 7 Let's Blog: Just Chatting 👨‍💻📝📘
              Tour of Articles about Technology by Doctor Derek ✍ Let's Blog:
              JavaScript Tutorials 💙 Chillhop & Code 📺 relaxing programming
              Hours 4 & 8 Let's Play: Screeps (or Science & Technology) 👾🎮🎰
              Let's Play: Sourcery & Nester (HTML & Emmet Games) 🎯 Let's Play:
              JavaScript & CSS Games 💙 Chillhop & Code 📺 relaxing programming
              Hour 5 Let's Build Websites: Just Chatting 🏗️🕸🔥 Let's Build: A
              Jamstack Site for My Episode Descriptions 💸 Let's Build Websites:
              Real Client Work 💙 Chillhop & Code 📺 relaxing programming Hour 9
              Post-Presentation: Science & Technology 💙 Chillhop & Code 📺
              JavaScript tutorials, coursework & live programming over jazzy /
              lo-fi beats to relax / study to 👉 DoctorDerek.com 👈 EPISODE
              DESCRIPTION 💙 Chillhop & Code 📺 episode #0016 (2020-11-20) Hour
              1 👨‍⚕️💬🧠 Ask Doctor Derek ❓ Health & Coding 💪 ➡️➡️➡️ 💬 Why I
              LOVE Fluoride But Drink Filtered Water ❓ Hour 2 🏫💻🎓 Let's
              Learn: JavaScript Coursework* 💯 ➡️➡️➡️ Commentary on: Complete
              React Developer by @AndreiNeagoie Hour 3 👨‍💻📝📘 Let's Blog:
              JavaScript Tutorials ✍ ➡️➡️➡️ Topic: Tour of Articles about
              Technology by Doctor Derek Hour 4 👾🎮🎰 Let's Play: JavaScript &
              CSS Games 🎯 ➡️➡️➡️ Let's Play: Sourcery & Nester (HTML & Emmet
              Games) Hour 5 🏗️🕸🔥 Let's Build Websites: Real Client Work 💸
              ➡️➡️➡️ Let's Build: A Jamstack Site for My Episode Descriptions
              Hour 6 🏫💻🎓 Let's Learn: JavaScript Coursework* 💯 ➡️➡️➡️
              Commentary on: Complete React Developer by @AndreiNeagoie Hour 7
              👨‍💻📝📘 Let's Blog: JavaScript Tutorials ✍ ➡️➡️➡️ Topic: Tour of
              Articles about Technology by Doctor Derek Hour 8 👾🎮🎰 Let's
              Play: JavaScript & CSS Games 🎯 ➡️➡️➡️ Let's Play: Sourcery &
              Nester (HTML & Emmet Games) \*Support the course:
              https://www.udemy.com/course/complete-react-developer-zero-to-mastery/
              (Not an ad) 👨‍⚕️💬🧠 Ask me anything 👉 DoctorDerek.com 👈
              @ChillhopAndCode 💙 👀 Livestreaming weekdays on Twitch 📺
              https://twitch.tv/ChillhopAndCode/ 💙 About Chillhop & Code:
              Chillhop & Code teaches JavaScript programming to web developers
              over jazzy / lofi hip hop beats to relax / study to. Starring Dr.
              Derek Austin 🥳 (The physical therapist who writes JavaScript) and
              Computer 🤖 (The Australian rapping robot) 👨‍⚕️💬🧠 Ask me anything
              👉 DoctorDerek.com 👈 💙 Chillhop & Code on Twitch 📺
              https://twitch.tv/ChillhopAndCode/ 🧠 Read my blog at Medium 🥳
              https://DoctorDerek.Medium.com 📧 Join my email list 🆓
              https://tinyletter.com/DoctorDerek ⬆ Get free access to all of my
              Medium articles 👍 🙏 Support me on Patreon 💸
              https://patreon.com/DoctorDerek 🎶 Music by Chillhop Music 🎧
              https://chillhop.ffm.to/creatorcred EPISODE HIGHLIGHTS Twitch
              title (140 characters): 💙 Chillhop & Code 📺 2020-11-20
              JavaScript tutorials, coursework & programming + jazzy/lo-fi beats
              to relax/study to 👉 DoctorDerek.com 👈 YouTube title (100
              characters): 💙 Chillhop & Code 📺 2020-11-20 JavaScript
              tutorials, coursework & programming + jazzy/lo-fi beats ADD
              HIGHLIGHTS Twitch title (140 characters): 👨‍⚕️💬🧠 Why I LOVE
              Fluoride But Drink Filtered Water ❓ Ask Doctor Derek 💪
              2020-11-20 💙 Health & Coding 👉 DoctorDerek.com 👈 YouTube title
              (100 characters): 👨‍⚕️💬🧠 Why I LOVE Fluoride But Drink Filtered
              Water ❓ Ask Doctor Derek 💪 2020-11-20 Ask Doctor Derek episode
              #0016 (2020-11-20) 👨‍⚕️💬🧠 Why I LOVE Fluoride But Drink Filtered
              Water ❓ About Dr. Derek Austin 🥳: 💪 The physical therapist who
              writes JavaScript 🤓 Web Developer 😎 Mentor 🧠 Doctor of Physical
              Therapy 🎓 Bootcamp Instructor 😄 SEO Expert 😁 React Programmer
              😆 Jamstack Enthusiast 👨‍⚕️💬🧠 Ask me anything 👉 DoctorDerek.com
              👈 @AskDoctorDerek 💙 👀 Livestreaming weekdays on Twitch 📺
              https://twitch.tv/ChillhopAndCode/ 💙 About Chillhop & Code:
              Chillhop & Code teaches JavaScript programming to web developers
              over jazzy / lofi hip hop beats to relax / study to. Starring Dr.
              Derek Austin 🥳 (The physical therapist who writes JavaScript) and
              Computer 🤖 (The Australian rapping robot) 👨‍⚕️💬🧠 Ask me anything
              👉 DoctorDerek.com 👈 💙 Chillhop & Code on Twitch 📺
              https://twitch.tv/ChillhopAndCode/ 🧠 Read my blog at Medium 🥳
              https://DoctorDerek.Medium.com 📧 Join my email list 🆓
              https://tinyletter.com/DoctorDerek ⬆ Get free access to all of my
              Medium articles 👍 🙏 Support me on Patreon 💸
              https://patreon.com/DoctorDerek 🎶 Music by Chillhop Music 🎧
              https://chillhop.ffm.to/creatorcred
            </div>
          </article>
        </main>
        <Footer {...props} />
      </div>
    </Layout>
  )
}

export default Post
