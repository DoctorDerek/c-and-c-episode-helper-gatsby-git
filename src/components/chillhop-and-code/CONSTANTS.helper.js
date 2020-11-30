export const SHOW_CONSTANTS = {
  showName: "💙 Chillhop & Code 📺",
  showPostfix: "relaxing programming",
  hour0Title: `JavaScript tutorials, coursework & live programming over jazzy / lo-fi beats to relax / study to`,
  twitchTitle: `JavaScript tutorials, coursework & programming + jazzy/lo-fi beats to relax/study to`,
  youtubeTitle: `JavaScript tutorials, coursework & programming + jazzy/lo-fi beats`,
}

// Object literal to link each hour's segments with the title template
export const SEGMENT_LOOKUP = {
  "Ask Doctor Derek": {
    prefix: "👨‍⚕️💬🧠",
    segmentDescription:
      "Ask Doctor Derek 💪 Health & Coding 🙋‍♂️ Ask me anything",
    postfix: "❓",
  },
  "Let's Learn": {
    prefix: "🏫💻🎓",
    segmentDescription: "Let's Learn: JavaScript Coursework + Commentary",
    postfix: "💯",
  },
  "Let's Blog": {
    prefix: "👨‍💻📝📘",
    segmentDescription: "Let's Blog: JavaScript Tutorials",
    postfix: "✍",
  },
  "Let's Play": {
    prefix: "👾🎮🎰",
    segmentDescription: "Let's Play: JavaScript & CSS Games",
    postfix: "🎯",
  },
  "Let's Build Websites": {
    prefix: "🏗️🕸🔥",
    segmentDescription: "Let's Build Websites: Real Client Work",
    postfix: "💸",
  },
  "Pre/Post-Presentation": {
    prefix: "💙 Chillhop & Code 📺",
    postfix: "👉 DoctorDerek.com 👈",
  },
}

/**
 * @typedef {Object} chapter
 * @property {string} title - Indicates whether the Courage component is present.
 * @property {string} segment - Indicates whether the Power component is present.
 * @property {string} showPostfix
 * @property {string} hour0Title
 * @property {string} twitchTitle
 * @property {string} youtubeTitle
 * @property {string} segmentDescription
 * @property {string} prefix
 * @property {string} postfix
 * @property {string} showName
 * */
