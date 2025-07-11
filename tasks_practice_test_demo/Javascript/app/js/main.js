function handleResult(error, result){    
    if(error) {     // если передана ошибка 
        console.error(error);   
    }  
    else {     // если асинхронная функция завершилась успешно
        console.log("Result:", result);    
    }  
}
 
function asyncFunction(callback) {
    setTimeout(()=>{
        let result = Math.floor(Math.random() * 100) + 1;
        if(result < 50) { 
            // если меньше 50, устанавливаем ошибку
            callback(new Error("Некорректное значение: " + result), null);      
        } 
        else{
            // в остальных случаях устанавливаем результат
            callback(null, result);
        }
    }, 1000);
}
asyncFunction(handleResult);