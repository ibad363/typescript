import student from "./data";


export const getAllStudent = () => {
    return student
}

export const getOnsiteStudent = () =>{
    return student.filter((student)=>student.isOnsiteAllowed)
}

export const getStudent = (rollNo : number) =>{
    return student.find((student)=> student.rollNo === rollNo)
}

export const isStudentOnsite = (rollNo: number) =>{
    const foundUser = student.find((student) => student.rollNo === rollNo && student.isOnsiteAllowed)
    
    if(foundUser){
        return true
    }else {
        return false
    }
}