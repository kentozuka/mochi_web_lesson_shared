const data = require('./index.json')

const { items } = data

console.log(items.map(x => x.title))