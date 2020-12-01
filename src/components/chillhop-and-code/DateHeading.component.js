import React from "react"
import _ from "lodash"
import moment from "moment-strftime"
import DateWithDayName from "./DateWithDayName.component"

const DateHeading = ({ date, episodeNumber }) => (
  <header className="post-header" key="Date Heading">
    <h1 className="post-title">
      Episode #{episodeNumber}
      <DateWithDayName date={date} />
    </h1>
  </header>
)

export default DateHeading
