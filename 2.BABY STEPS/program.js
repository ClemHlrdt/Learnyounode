var elem = process.argv;
var result=0;
for(let i=2; i<elem.length;i++){
  result+=parseFloat(elem[i]);
}
console.log(result)
