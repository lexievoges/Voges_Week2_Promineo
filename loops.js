// 6a. A while loop that prints all even numbers from 0 to 100

console.log("Step 6a.");

for (let i = 0; i <= 100; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

// 6b. A while loop that prints every 3rd number going backwards from 100 until we reach 0

console.log("Step 6b.");
var j = 100;

while (j >= 0) {
  console.log(j);
  j = j - 3;
}

// 6c. A for loop that prints every other number from 1 to 100
console.log("Step 6c.");

for (let i = 0; i <= 100; i++) {
  if (i % 2 == 1) {
    console.log(i);
  }
}

// 6d. A for loop that prints every number from 0 to 100, but if the number is divisible by 3,
// it prints “Hello” instead of the number, and if the number is divisible by 5, it prints “World” instead of the number,
// and if it is divisible by both 3 and 5, it prints “HelloWorld” instead of the number.

console.log("Step 6d.");

for (let i = 0; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("Hello, World!");
  } else if (i % 3 == 0) {
    console.log("Hello");
  } else if (i % 5 == 0) {
    console.log("World");
  } else {
    console.log(i);
  }
}
