function washing(callBack) {
    console.log("Washing Started");
    setTimeout(() => {
        console.log("Washing Done");
        callBack();
    }, 5000);
}
function soaking(callBack) {
    console.log("Soacking Started");
    setTimeout(() => {
        console.log("Soacking Done");
        callBack();
    }, 3000);
}
function drying() {
    console.log("Drying Start");
    setTimeout(() => {
        console.log("Drying Done");
    }, 2000);
}
console.log("Folding Laundery");
washing(() => {
    soaking(() => {
        drying();
    });
});
console.log("Making Biryani");
export {};
