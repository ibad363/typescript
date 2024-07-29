// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

let dreamPlaces : string[] = ['Makkah', 'Madina','Najaf','Karbala', 'Baghdad','Lahore','Ajmer','Bareilly']; //Store the locations in a array
console.log(`Original Array: ${dreamPlaces}`); // Print array in its original order.

let sortedDreamPlaces :string[] = [...dreamPlaces]; // copy original for sorting alphabetically 
sortedDreamPlaces.sort();
console.log(`Alphabetically sorted Copy Array: ${sortedDreamPlaces}`); // Print array in alphabetical order.

console.log(`Original Array (Again): ${dreamPlaces}`); // Print array in its original order.

let reverseSortedDreamPlaces : string[] = [...sortedDreamPlaces]
reverseSortedDreamPlaces.reverse();
console.log(`Reverse Alphabetically sorted Array: ${reverseSortedDreamPlaces}`); // Print array in reverse alphabetical order.

console.log(`Original Array (Again): ${dreamPlaces}`); // Print array in its original order.

dreamPlaces.reverse()
console.log(`Reverse Original List: ${dreamPlaces}`); // Print original array in reverse order.

dreamPlaces.reverse()
console.log(`Back to Original Array: ${dreamPlaces}`); // another reverse order for coming back to original array.

dreamPlaces.sort();
console.log(`Alphabetically sorted Original List: ${dreamPlaces}`); // Print original array in alphabetically sorted order.

dreamPlaces.sort().reverse();
console.log(`Reverse Alphabetically sorted Original List: ${dreamPlaces}`); // Print original array in Reverse alphabetically sorted order.