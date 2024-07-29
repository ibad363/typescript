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
            // resolve("Soaking Done")
            reject("Soaking not Done");
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

// washing().then((res)=>{
//     console.log(res);
//     return soaking()
// }).then((response)=>{
//     console.log(response);
//     return drying()
// }).then((response)=>{
//     console.log(response);
// })

async function runWashingMachine() {
    try {
        const result1 = await washing()
        console.log(result1);
        const result2 = await soaking()
        console.log(result2);
        const result3 = await drying()
        console.log(result3);
    } catch (err) {
        console.log(err);
    } finally {
        console.log("Finnally Washing Process Stopped");
    }
}
console.log("Folding Laundry");
runWashingMachine()
console.log("Making Biryani");