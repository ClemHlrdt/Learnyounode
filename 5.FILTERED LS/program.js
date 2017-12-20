const fs = require('fs');
const path = require('path');

const arg1 = process.argv[2];
const arg2 = process.argv[3];

const content = fs.readdir(arg1,'utf8', function(err, data){
  if(err) throw err;
  showDir(data);
});

function showDir(data){
  if (process.argv[3] === undefined) {
    for (var i = 0; i < data.length; i++) {
      console.log(data[i]);
    }
  } else if(process.argv[3] != undefined) {
    for (var i = 0; i < data.length; i++) {
      if(path.extname(data[i]).substr(1) === arg2){
          console.log(data[i]);
      }
    }
  }
}
