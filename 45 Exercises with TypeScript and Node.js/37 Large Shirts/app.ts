// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

function make_shirt(size:string = "large" , message:string = "I love Typescript"){
  console.log(`making the "${size}" shirt with the message "${message}" printed on it.`);
 }
 
make_shirt(); // default size & message
make_shirt("medium") //default message & medium size
make_shirt(undefined, "I love python") //default size & custom message
make_shirt("small","I love python") //custom size & message