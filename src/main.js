var a = require("./a.js");
var b = require("./b.js");
var c = require("./c.js");
var d = require("./d.js");
var randomInt = require("random-int");
var camelcase = require("camelcase");

console.log(a.message);
console.log(b.name);
console.log(c.car);
console.log(d.demo);

console.log(randomInt(10,100));
console.log(camelcase("snake_case"));
