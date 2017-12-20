var fs = require('fs');
var arg = process.argv[2];

var contents = fs.readFile(arg, 'utf8', function(err,data){
  if (err) throw err;
  processFile(data.split("\n"));
});
// console.log(contents.length-1);
function processFile(data){
  console.log(data.length-1);
}
