cconst myPromise = new Promise(function(resolve, reject){
    console.log("Выполнение асинхронной операции");
    const parsed = parseInt("Hello");
    if (isNaN(parsed)) { 
        throw "Not a number";           // Генерируем ошибку
    }
    resolve(parsed);
});
myPromise.catch( function(error){
    console.log(error);
});

//**Здесь парсится в число случайная строка. И если результат парсинга не представляет число, 
// то с помощью оператора throw генерируем ошибку. Это придет к завершению всей функции с ошибкой. 
// И в итоге результат будет обработан функцией catch */