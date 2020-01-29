const basic = require('./basicInfo');
const experience = require('./experience');
const projects = require('./projects');
const repos = require('./repos');


module.exports = {
    ...basic,
    experience,
    projects,
    repos
};
