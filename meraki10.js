let readlineSync = require("readline-sync");
var varX=readlineSync.questionInt("enter a number");
var vary=readlineSync.questionInt("enter a number");
if(varX%vary===0){
   console.log("Divisible");
}
else{
   console.log("Not divisible");
}