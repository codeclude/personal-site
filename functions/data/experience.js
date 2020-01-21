const distanceInWords = require('date-fns/distance_in_words')

module.exports = [
    {
      company: "Capgemini",
      title: "Software Engineer",
      started: "2016",
      finished: "2019",
      seniority: distanceInWords(new Date(2016, 6, 1), new Date(2019,9, 31)),
    }
]