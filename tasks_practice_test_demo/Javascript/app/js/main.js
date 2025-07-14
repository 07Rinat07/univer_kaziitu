const myPromise = new Promise(function(resolve){
    console.log("Выполнение асинхронной операции");
    resolve("Привет мир!");
});
myPromise.then(function(value){
    console.log(`Из промиса получены данные: ${value}`);
})