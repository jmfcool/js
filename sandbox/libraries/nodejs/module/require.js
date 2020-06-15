const api = require('./module.js');

console.log(api);

const template = api("This is a Function");
console.log(template);

console.log(api.language, api.direction, api.encoding);