import React from "react"
import _ from "lodash"
import moment from "moment-strftime"

const DateWithDayName = ({ date }) => (
  <time
    className="published"
    dateTime={moment(date).strftime("%Y-%m-%d %H:%M")}
  >
    {moment(date).strftime("%A %Y-%m-%d").toLocaleUpperCase()}
  </time>
)

export default DateWithDayName
