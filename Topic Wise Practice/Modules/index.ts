import {getAllStudent,getOnsiteStudent,getStudent,isStudentOnsite} from "./student" //import by name

// import * as student from "./student"
//import all named export in object (student) by * as student


const students = getAllStudent()
// console.log("All Students:",students);

const onsiteStudent = getOnsiteStudent()
// console.log("Onsite Students:",onsiteStudent);

const result = getStudent(200001)
// console.log("Find Student by RollNo:",result);

const result2 = isStudentOnsite(200001)
console.log("is Student Onsite:",result2);