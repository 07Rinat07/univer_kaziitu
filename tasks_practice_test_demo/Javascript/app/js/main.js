const promise1 = new Promise((resolve,reject) => {
    setTimeout(resolve, 1000, "Hello");
});
const promise2 = new Promise((resolve,reject) => {
    setTimeout(resolve, 500, "World");
});
promise1.then(value => console.log(value));  // Hello
promise2.then(value => console.log(value));  // World