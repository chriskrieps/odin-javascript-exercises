const removeFromArray = function(myArray, removal /* */) {
    // Get array of given arguments
    const args = Array.from(arguments);

    // Remove first argument as it is my array
    args.shift();

    // Filter my array by the remaining arguments
    let filteredArray = myArray.filter(function(value, index, arr){
        if (!args.includes(value)) return value;
    })

    // Return the now filtered array
    return filteredArray;

};

// Do not edit below this line
module.exports = removeFromArray;
