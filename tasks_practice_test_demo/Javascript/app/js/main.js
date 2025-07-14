const myPromise = new Promise(function(resolve, reject){
    console.log("Выполнение асинхронной операции");
    reject("Переданы некорректные данные");
});
myPromise.catch( function(error){
    console.log(error);
});

//**Функция catch() в качестве параметра принимает обработчик ошибки. Параметром этой функции
// -обработчика является то значение, которое передается в reject(). */