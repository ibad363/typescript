// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

let magician :string[] = ["Magician 1", "Magician 2", "Magician 3", "Magician 4"]

function show_magicians(magician:string[]){
    magician.forEach(magician=>{
        console.log(`${magician}`);
    })
}

function make_great(magicianArray:string[]){
    for (let i=0 ; i < magicianArray.length; i++) {
        magician[i] = "The Great " + magician[i];
    }
}

make_great(magician)
show_magicians(magician)