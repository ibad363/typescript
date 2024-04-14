// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

let magician :string[] = ["Magician 1", "Magician 2", "Magician 3", "Magician 4"]

function show_magicians(magician:string[]){
    magician.forEach(magician=>{
        console.log(`${magician}`);
    })
}

show_magicians(magician)