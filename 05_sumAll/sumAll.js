const sumAll = function(value1, value2) {
    // Get all arguments for input checking
    var args = Array.from(arguments);

    // Check that arguments pass requirements
    for (let arg of args)
    {
        if (arg < 0) return "ERROR";
        else if (typeof arg != "number") return "ERROR";
    }

    // Determine the min and max values and assign to variables
    const maxValue = Math.max(value1, value2);
    const minValue = Math.min(value1, value2);

    // Declare a variable to store our sum within
    let finalSum = 0;

    // Iterate through each number and add to total
    for (let i = minValue; i < (maxValue+1); i++)
    {
        finalSum+=i;
    }

    // Return result
    return finalSum;

};

// Do not edit below this line
module.exports = sumAll;
