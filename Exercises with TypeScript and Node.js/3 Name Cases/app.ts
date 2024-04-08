//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let personName : string = 'john dOe';

console.log(`Orignial Name: ${personName}`)

console.log(`UpperCase: ${personName.toUpperCase()}`)
console.log(`LowerCase: ${personName.toLowerCase()}`)

function toTitleCase(input : string): string {
  return input.toLowerCase().
  replace(/(?:^|\s)\w/g,function(match){
    return match.toUpperCase();
  });
}

console.log(`TitleCase: ${toTitleCase(personName)}`)
