// const firstPromise = new Promise((resolve, reject) => {
//     resolve("First")
// })
// const secondPromise = new Promise((resolve, reject) => {
//     resolve(firstPromise)
// })

// secondPromise.then((res)=>console.log(res))
// // secondPromise.then((res) => {return res}).then((res) => console.log(res))



// const returnMoney = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         resolve("Money Returned")
//         // reject("Failure")
//     }, 1500);
// })

// returnMoney.then((value)=>{
//     console.log(value);
//     console.log("Thank you for returning Money");
// }).catch((value)=>{
//     console.log(value);
//     console.log("Sorry, I am Unable to return Money");
// }).finally(()=>{
//     console.log("Ainda bhi Paisa Mile ga");
// })

function washing() {
    console.log("Washing Started..");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Washing Done")
        }, 2500);
    })
}

function soaking() {
    console.log("Soaking Started");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Soaking Done");
        }, 2000);
    })
}

function drying() {
    console.log("Drying Started");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Drying Done");
        }, 2000);
    })
}

washing().then((res)=>{
    console.log(res);
    return soaking()
}).then((response)=>{
    console.log(response);
    return drying()
}).then((response)=>{
    console.log(response);
})