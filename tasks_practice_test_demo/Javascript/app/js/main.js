const myPromise = new Promise(function(resolve, reject){
    try{
        console.log("Выполнение асинхронной операции");
        getSomeWork();      // вызов не существующей функции
        resolve("Hello world!");
    }
    catch(err){
        reject(`Произошла ошибка: ${err.message}`);
    }
});
myPromise.catch( function(error){
    console.log(error);
});

//**Как и в общем случае, операции, которые могут генерировать ошибку, можно помещать в 
// конструкцию try..catch, а при возникновении исключения в блоке catch вызывать функцию reject():

 */