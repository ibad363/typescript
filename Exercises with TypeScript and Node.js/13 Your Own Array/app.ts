// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

import { log } from "console";

let vehicles :string[] = ['Suzuki 150', 'Honda 125', 'Suzuki 110', 'KIA Sorento 2021']

vehicles.forEach(vehicles =>{
  console.log(`I would like to own a ${vehicles}`);
  
})