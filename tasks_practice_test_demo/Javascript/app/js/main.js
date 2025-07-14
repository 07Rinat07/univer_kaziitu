const myPromise = new Promise(function(resolve){
    console.log("Выполнение асинхронной операции");
    getSomeWork();      // вызов не существующей функции
    resolve("Hello world!");
});
myPromise.catch( function(error){
    console.log(error);
});
//**Поскольку функция getSomeWork() нигде не объявлена, то выполнение асинхронной задачи 
// завершится ошибкой и не дойдет до вызова resolve("Hello world!"). Поэтому сработает функция 
// обработки ошибок из catch(), которая через параметр error получит информацию о возникшей ошибке,
//  и в консоли браузера мы увидим сообщение об ошибке: */