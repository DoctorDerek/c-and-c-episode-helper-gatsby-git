import React from "react"
import { SHOW_CONSTANTS, SEGMENT_LOOKUP } from "./CONSTANTS.helper"
import DateWithDayName from "./DateWithDayName.component"

const EpisodeTitles = ({ date }) => (
  <section>
    <br />
    <h2>
      EPISODE TITLES
      <DateWithDayName date={date} />
    </h2>
    <br />
    <h3>Twitch title (140 characters):</h3>
    <br />
    <h4>
      {SHOW_CONSTANTS.showName} {date} {SHOW_CONSTANTS.twitchTitle}{" "}
      {SEGMENT_LOOKUP["Pre/Post-Presentation"].postfix}
    </h4>
    <br />
    <h3>YouTube title (100 characters):</h3>
    <br />
    <h4>
      {SHOW_CONSTANTS.showName} {date} {SHOW_CONSTANTS.youtubeTitle}{" "}
      {SEGMENT_LOOKUP["Pre/Post-Presentation"].postfix}
    </h4>
  </section>
)

export default EpisodeTitles
