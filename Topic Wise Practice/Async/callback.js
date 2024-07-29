// sir zia repo code
// function myCallBack(text: string) {
//     console.log("inside myCallback " + text);
// }
// function callingFunction(initialText: string, callback: (text: string) => void)
// {
//     callback(initialText);
// }
// callingFunction("myText", myCallBack);
function parentFunction(firstText, callback) {
    console.log("Parent Function");
    callback(firstText);
}
let cb = (text2) => {
    console.log("Callback Function");
    console.log(text2);
};
console.log("Ibad");
parentFunction("First Text", cb);
export {};
