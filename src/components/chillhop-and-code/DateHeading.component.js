import React from "react"
import _ from "lodash"
import moment from "moment-strftime"

const DateHeading = ({ date }) => (
  <header className="post-header">
    <h1 className="post-title">
      <time
        className="published"
        dateTime={moment(date).strftime("%Y-%m-%d %H:%M")}
      >
        {moment(date).strftime("%A %Y-%m-%d").toLocaleUpperCase()}
      </time>
    </h1>
    <div className="post-meta">Episode # </div>
  </header>
)

export default DateHeading
