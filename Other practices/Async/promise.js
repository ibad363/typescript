const firstPromise = new Promise((resolve, reject) => {
    resolve("First");
});
const secondPromise = new Promise((resolve, reject) => {
    resolve(firstPromise);
});
secondPromise.then((res) => console.log(res));
export {};
// secondPromise.then((res) => {return res}).then((res) => console.log(res))
