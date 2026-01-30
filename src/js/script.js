const prompt = require("prompt-sync")();

let name = prompt("Enter Your Name: ");
let weeklyBudget = parseInt(prompt("Enter Weekly Budget: "));

function calculateDaily(total){
    return total/7;
}

let dailyLimit = calculateDaily(weeklyBudget);

if (dailyLimit < 2000) {
  console.log ("Avoid luxury expenses");
} 
else if (dailyLimit >= 2000 && dailyLimit <= 10000) {
  console.log ("You have a balanced budget");
} 
else {
  console.log("Consider investing your surplus");
}
