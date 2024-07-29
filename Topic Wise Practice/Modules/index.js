"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const student_1 = require("./student"); //import by name
// import * as student from "./student"
//import all named export in object (student) by * as student
const students = (0, student_1.getAllStudent)();
// console.log("All Students:",students);
const onsiteStudent = (0, student_1.getOnsiteStudent)();
// console.log("Onsite Students:",onsiteStudent);
const result = (0, student_1.getStudent)(200001);
// console.log("Find Student by RollNo:",result);
const result2 = (0, student_1.isStudentOnsite)(200001);
console.log("is Student Onsite:", result2);
