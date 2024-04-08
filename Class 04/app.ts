//class 4 about some arithmetic Operators

let a: number = 5;
let b: number = 2;
let c: number;
c= ++a + a++ + --b + b-- + a + b++ + b;
// 6   + 6   + 1   + 1   + 7 + 0   + 1 = 22
console.log(c);