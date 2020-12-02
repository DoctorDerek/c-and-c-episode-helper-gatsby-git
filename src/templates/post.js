import React from "react"
import _ from "lodash"
import moment from "moment-strftime"
import { graphql } from "gatsby"

import { Layout } from "../components/index"
import HeaderAlt from "../components/HeaderAlt"
import Header from "../components/Header"
import { htmlToReact } from "../utils"
import Footer from "../components/Footer"

import ADDHighlights from "../components/chillhop-and-code/ADDHighlights.component"
import DateHeading from "../components/chillhop-and-code/DateHeading.component"
import EpisodeDescription from "../components/chillhop-and-code/EpisodeDescription.component"
import EpisodeTitles from "../components/chillhop-and-code/EpisodeTitles.component"
import TwitchLiveShow from "../components/chillhop-and-code/TwitchLiveShow.component"
import YouTubeTags from "../components/chillhop-and-code/YouTubeTags.component"
import YouTubeTutorial from "../components/chillhop-and-code/YouTubeTutorial.component"
import populateTitlesAndSegments from "../components/chillhop-and-code/populateTitlesAndSegments.helper"

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
  const titlesAndSegments = populateTitlesAndSegments(props)

  // Retrieve some props from the front matter using lodash:
  const episodeNumber = _.get(
    props,
    "pageContext.frontmatter.episodeNumber",
    null
  )
  const date = _.get(props, "pageContext.frontmatter.date", null)
  const html = htmlToReact(_.get(props, "pageContext.html", null))
  const image = _.get(props, "pageContext.frontmatter.content_img_path", null)
  const hideHeader = _.get(props, "pageContext.frontmatter.hide_header", null)
  const courseLink = _.get(props, "pageContext.frontmatter.courseLink", null)
  const tutorialTitle = _.get(
    props,
    "pageContext.frontmatter.tutorialTitle",
    null
  )
  const tutorialSubtitle = _.get(
    props,
    "pageContext.frontmatter.tutorialSubtitle",
    null
  )
  const tutorialLink = _.get(
    props,
    "pageContext.frontmatter.tutorialLink",
    null
  )

  return (
    <Layout {...props}>
      {hideHeader === true ? (
        <HeaderAlt {...props} />
      ) : (
        <Header
          {...props}
          site={props.pageContext.site}
          page={props.pageContext}
          image={image}
        />
      )}
      <div id="content" className="site-content chillhop-and-code">
        <main id="main" className="site-main inner">
          <article className="post post-full">
            <DateHeading date={date} episodeNumber={episodeNumber} />
            <h3 key="Episode Notes">Episode-specific notes:</h3>
            <blockquote className="post-content">{html}</blockquote>
            <YouTubeTags />
            <TwitchLiveShow date={date} {...titlesAndSegments} />
            <EpisodeTitles date={date} {...titlesAndSegments} />
            <EpisodeDescription
              date={date}
              episodeNumber={episodeNumber}
              {...titlesAndSegments}
              courseLink={courseLink}
            />
            <ADDHighlights
              date={date}
              episodeNumber={episodeNumber}
              {...titlesAndSegments}
            />
            <YouTubeTutorial
              date={date}
              tutorialTitle={tutorialTitle}
              tutorialSubtitle={tutorialSubtitle}
              tutorialLink={tutorialLink}
            />
          </article>
        </main>
        <Footer {...props} />
      </div>
    </Layout>
  )
}

export default Post
