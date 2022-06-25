const [addNums, addManyNums] = require("./phase-1");

function addNums10Timing(increment) {
  function addNums(n) {
    let sum = 0;
    for ( let i = 1; i <= n; i++){
      startTime = Date.now();
      sum += i;
      endTime = Date.now();
      console.log(`${endTime - startTime}`);
    }
    return sum;

  }
  // Then, add timing code

  // Your code here

}


function addManyNums10Timing(increment) {
  function addManyNums(n) {
    let sum = 0;
    // Fill this in
    for ( let i = 1; i <= n; i++){
      startTime = Date.now();
      sum += addNums(i);
      endTime = Date.now();
      console.log(`${endTime - startTime}`);
    }
    return sum;
  }
// Then, add timing code

  // Your code here

}

console.time("addNums10Timing");
n = 1000000
console.log(`addNums(${n}): `);
addNums10Timing(1000000);
console.timeEnd("addNums10Timing");
console.timeLog("addNums10Timing");


console.log("\n***********\n");
console.time("addManyNums10Timing");
n = 5000
console.log(`addManyNums(${n}): `);
addManyNums10Timing(5000);
console.timeEnd("addManyNums10Timing");
console.timeLog("addManyNums10Timing");
