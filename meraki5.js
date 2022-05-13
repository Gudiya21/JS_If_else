let readlineSync = require("readline-sync").questionInt("enter a number:");
// var number=readlineSync.questionInt("enter a number:");
if (readlineSync<10){
   console.log("num is less than 10");
}
else if(readlineSync>10 && readlineSync<20){
   console.log("num is less than 20");
}
else{
   console.log("greater than 20");
}
