//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let personName : string = 'john dOe';

console.log(`Orignial Name: ${personName}`)

console.log(`UpperCase: ${personName.toUpperCase()}`)
console.log(`LowerCase: ${personName.toLowerCase()}`)

let split = personName.split(" ")
let titlecase = ""
for(let i = 0; i < split.length;i++){
  titlecase += split[i].charAt(0).toUpperCase() + split[i].slice(1).toLowerCase() + " "
}

console.log(`TitleCase: ${titlecase}`)