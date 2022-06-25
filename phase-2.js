const [addNums, addManyNums] = require("./phase-1");

// Runs `addNums` in 10 increasing increments
function addNums10(increment) {
  let array = [];
  for ( let i = increment; i <= increment*10; i+=increment){
    array.push(addNums(i));
  }
  return array;

}

// Runs `addManyNums` in 10 increasing increments
function addManyNums10(increment) {
  let newArray = [];
  for ( let i = increment; i <=increment*10; i+=increment){
    newArray.push(addManyNums(i));
  }
  return newArray;
}

module.exports = [addNums10, addManyNums10];
