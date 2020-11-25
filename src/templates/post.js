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
import EpisodeHighlights from "../components/chillhop-and-code/EpisodeHighlights.component"
import TwitchLiveShow from "../components/chillhop-and-code/TwitchLiveShow.component"
import YouTubeTags from "../components/chillhop-and-code/YouTubeTags.component"
import YouTubeTutorial from "../components/chillhop-and-code/YouTubeTutorial.component"

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
  const titlesAndSegments = { FIRST_HOUR: 1, MAX_HOURS: 8 }
  for (
    let i = titlesAndSegments.FIRST_HOUR;
    i < titlesAndSegments.MAX_HOURS;
    i++
  ) {
    titlesAndSegments[`titleForHour${i}`] = _.get(
      props,
      `pageContext.frontmatter.titleForHour${i}`,
      null
    )
    titlesAndSegments[`segmentForHour${i}`] = _.get(
      props,
      `pageContext.frontmatter.segmentForHour${i}`,
      null
    )
  }

  // Retrieve some props from the front matter using lodash:
  const episodeNumber = _.get(
    props,
    "pageContext.frontmatter.episodeNumber",
    null
  )

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
      <div id="content" className="site-content chillhop-and-code">
        <main id="main" className="site-main inner">
          <article className="post post-full">
            <DateHeading
              date={_.get(props, "pageContext.frontmatter.date", null)}
              episodeNumber
            />
            <h3 key="Episode Notes">Episode-specific notes:</h3>
            <blockquote className="post-content">
              {htmlToReact(_.get(props, "pageContext.html", null))}
            </blockquote>
            <YouTubeTags />
            <TwitchLiveShow {...titlesAndSegments} />
            <EpisodeDescription episodeNumber {...titlesAndSegments} />
            <EpisodeHighlights />
            <ADDHighlights />
            <YouTubeTutorial />
          </article>
        </main>
        <Footer {...props} />
      </div>
    </Layout>
  )
}

export default Post
