// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// •Test whether an item is not in a array

// Tests for equality and inequality with strings

let fruits: string = "Apple"

console.log("Apple" == "Apple"); //true
console.log("Apple" == "apple"); //false

// Tests using the lower case function

console.log(fruits.toLowerCase() == "apple"); //true
console.log(fruits.toLowerCase() == "Apple"); //false


// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

console.log(10 == 10); //true
console.log(10 != 10); //false
console.log(11 > 10); //true
console.log(11 < 10); //false
console.log(10 >= 10); //true
console.log(11 <= 10); //false
console.log(9 <= 10); //true


// Tests using "and" and "or" operators

console.log(true && false); //false
console.log(true && true); //true
console.log(true || false); //true


// Test whether an item is in a array

let car :String[] = ["Vitz", "corolla", "prado"]
console.log("Is corolla is in car");
console.log(car.includes("corolla")); //true

// Test whether an item is not in a array

console.log("Is revo is in car");
console.log(car.includes("revo")); //false