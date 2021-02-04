//	1. What do each of the following Boolean expressions evaluate to ?

// console.log(true && false);
// console.log(true || false);
// console.log(false && false);
// console.log(true && (false || true));
// console.log(false || (true && false));
// console.log(false || 1 < 5);
// console.log(5 >= 4 && 1 > 3);
// console.log(10 < 4 || 1 > 4);
// console.log(12 >= 2 && 1 < 24);
// console.log("Hello".charAt(0) == "h");

//  2. In your editor, create a new directory for this project. Create an index.html and index.js file.
//Link the JavaScript file to the HTML file. In the JavaScript file
// create the following Boolean variables and choose what values they hold:

var isHotOutside = false;
var isWeekday = true;
var hasMoneyInPocket = true;

// 3. Create the following variables and assign them values(the assigned values should not be Boolean):
var costOfMilk = 2.49;
var moneyInWallet = 10;
var thirstLevel = 4;

// 4. Using the variables you created above and boolean operators,
// create variables for: shouldByIcecream, willGoSwimming, isAGoodDay, and willBuyMilk

let shouldByIcecream = isHotOutside && hasMoneyInPocket;
let willGoSwimming = isHotOutside && !isWeekday;
let isAGoodDay = isHotOutside && hasMoneyInPocket && !isWeekday;
let willBuyMilk =
  isHotOutside && thirstLevel >= 3 && moneyInWallet >= 2 * costOfMilk;

console.log(shouldByIcecream);
console.log(willGoSwimming);
console.log(isAGoodDay);
console.log(willBuyMilk);
