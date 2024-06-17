// in class 16 (13/6/24), asynchronous, promise, then catch, promise chaining, async await, try catch

// let promiseOne = new Promise ((resolve,reject) =>{
//     console.log("Promise pending");
//     setTimeout(() => {
//         // console.log("Promise Resolved");
//         // resolve("Ibad")
//         reject(new Error ("Error Aya he"))
//     },1500)
// })

// promiseOne.then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     // console.log(err);
//     console.log("Error Occured"); // another way for print error
// })



// let promiseTwo = new Promise ((resolve,reject)=>{
//     console.log("Promise pending");
//     setTimeout(() => {
//         let data = ["Ibad","AI Engineer",20] //resolve line
//     // let data = "" //reject line
//     if(data){
//         console.log("promise resolved");
//         resolve(data)
//     }else{
//         console.log("promise rejected");
//         reject("Data Fetch nh hosaka")
//     }
//     }, 1000);
// })
// promiseTwo.then((resolveResult)=>{
//     console.log(resolveResult);
// }).catch((error)=>{
//     console.log("Error from fetching Data");
// })




// let promiseThree = new Promise((resolve,reject)=>{
//     resolve(10)
// }).then((resoloveValue)=>{
//     console.log(resoloveValue);
//     return 20
// }).then((resoloveValue2)=>{
//     console.log(resoloveValue2);
//     let promiseFour = new Promise ((resolve,reject)=>{
//         resolve("Resolve Hogaya")
//     })
//     return promiseFour
// }).then((resoloveValue3)=>{
//     console.log(resoloveValue3);
// })




// let promiseFive = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({username: "Ibad", email: "ibad@gmail.com"})
//     },1000)
// })

// promiseFive.then(function(response){
//     console.log(response);
// })



// let promiseSix = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = false
//         if(!error){
//             resolve({username: "Ibad", email: "ibad@gmail.com"})
//         }else{
//             reject("Error aya he")
//         }
//     },1000)
// })

// promiseSix.then(function(response){
//     console.log(response);
//     return response.username
// }).then(function(res){
//     console.log(res);  
// }).catch(function(error){
//     console.log(error,);
// }).finally(()=>{
//     console.log("the promise is either resolve or rejected");
    
// })



let promiseSeven = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({ username: "Ibad", email: "ibad@gmail.com" })
        } else {
            reject("Error aya he")
        }
    }, 1000)
})

async function promiseSevenConsumed() {
    try{
        const response = await promiseSeven
        console.log(response);
    }catch(err){
        console.log(err);
    }
}
promiseSevenConsumed()