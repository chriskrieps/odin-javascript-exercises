const add = function(val1, val2) {
	return (val1+val2)
};

const subtract = function(val1, val2) {
	return (val1-val2)
};

const sum = function(myArray) {
  // Initialize variable at zero for total sum
  mySum = 0;

  // Loop through each array value
	for (let val of myArray)
  {
    // Add the array value to the total
    mySum+=val;
  }

  return mySum;
};

const multiply = function(myArray) {
  // Initialize variable as null until we know the first value
  myMulti = null;

  // Loop through each array value
	for (let val of myArray)
  {
    // If this is the initial value, set myMulti to that
    if (myMulti == null)
    {
      myMulti = val;
      continue;
    }
      // multiply the current multiple by this value
      myMulti=myMulti*val;
  }

  return myMulti;
};

const power = function(num, power) {
	return Math.pow(num, power)
};

const factorial = function(num) {
  // Initialize at 1
  totFactorial = 1;
	for (let i = 0; i<num; i++)
  {
     totFactorial = totFactorial * (num-i);
  }
  return totFactorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
