var fs = require('fs');
var arg = process.argv[2];

var contents = fs.readFileSync(arg, 'utf8');
var result = contents.split("\n");
console.log(result.length-1);
