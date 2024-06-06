"use strict";
//class 4 about some arithmetic Operators
let a = 5;
let b = 2;
let c;
c = ++a + a++ + --b + b-- + a + b++ + b;
//  6  +  6  +  1  + 1   + 7 + 0   + 1 = 22
console.log(c); // output 22
