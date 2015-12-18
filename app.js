// Use Node.Js to connect to Treehouse API to get profile info to print out
var profile = require("./profile.js");
//console.dir(process.argv)
var users = process.argv.slice(2);
//var users = ['chalkers', 'joykesten2', 'davemcfarland'];
users.forEach(profile.get);
