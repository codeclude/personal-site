const {distanceInWords} = require("date-fns");

module.exports = [
    {
      company: "Deviniti",
      title: "Fullstack Developer",
      started: "09.2019",
      finished: "",
      technologyStack: "React, Java Spring",
      seniority: distanceInWords(new Date(2019, 9, 1), new Date()),
    },
    {
      company: "Capgemini",
      title: "Software Engineer",
      started: "06.2016",
      finished: "09.2019",
      technologyStack: "Java Spring, Angular",
      seniority: distanceInWords(new Date(2016, 6, 1), new Date(2019,9, 31)),
    }
];
