// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: nestedFunction can access the variable internal due to it being in nestedFunctions lexical scope. 


/* Task 2: Counter */

/* Create a function called `sumation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

const sumation = num => {
  let counter = 0
  return () => {
    for (let i = 0; i <= num; i++) {
      counter += i
    }
    return counter
  }
}

const sum1 = sumation(4)
console.log(sum1())
console.log(sum1())
const sum2 = sumation(5)
console.log(sum2())
console.log(sum2())
const sum3 = sumation(6)
console.log(sum3())
console.log(sum3())
