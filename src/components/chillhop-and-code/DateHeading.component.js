import React from "react"
import _ from "lodash"
import moment from "moment-strftime"

const DateHeading = ({ date, episodeNumber }) => (
  <header className="post-header" key="Date Heading">
    <h1 className="post-title">
      <time
        className="published"
        dateTime={moment(date).strftime("%Y-%m-%d %H:%M")}
      >
        {moment(date).strftime("%A %Y-%m-%d").toLocaleUpperCase()}
      </time>{" "}
      (Episode #{episodeNumber})
    </h1>
  </header>
)

export default DateHeading
