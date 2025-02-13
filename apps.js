const multiArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

//.4
function logMultiArrayValues(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            console.log(arr[i][j]);
        }
    }
}

logMultiArrayValues(multiArray);

//.5
function findLargestNumber(num1, num2) {
    return num1 > num2 ? num1 : num2;
}

console.log(findLargestNumber(10, 20)); 
console.log(findLargestNumber(50, 30));

//.6
function compareValues(value1, value2) {
    if (value1 === value2) {
        return "The values are equal.";
    } else {
        return "The values are different.";
    }
}

console.log(compareValues(5, 5)); 
console.log(compareValues(5, "5")); 
console.log(compareValues(10, 20)); 