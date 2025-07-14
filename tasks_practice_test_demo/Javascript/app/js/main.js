function getNumber(str){
    const parsed = parseInt(str);
    if (isNaN(parsed)) throw "Not a number";            // Генерируем ошибку
    else return parsed;
}
const myPromise = new Promise(function(resolve){
    console.log("Выполнение асинхронной операции");
    const result = getNumber("hello");
    resolve(result);
});
myPromise.catch( function(error){
    console.log(error);
});

//**Здесь парсинг строки в число вынесен во внешнюю функцию - getNumber, однако при вызове этой 
// функции в промисе, также из оператора throw возникнет ошибка. И соответственно будет выполняться 
// функция catch(), где роизойдет обработка ошибки. */