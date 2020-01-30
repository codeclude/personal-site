const axios = require('axios')

const repos = axios(
    'https://api.github.com/users/korczynsk1/repos?type=all&per_page=100'
)
    .then(repos =>
        repos.data.map(repo => ({
            name: repo.name,
            url: repo.html_url,
            description: repo.description,
            language: repo.language,
            owner: repo.owner.login
        }))
    )
    // .then(repos => repos.filter(r => !r.fork && r.owner.login === 'korczynsk1'))
    // .then(repos => repos.sort((a, b) => b.stars - a.stars))

module.exports = repos;
