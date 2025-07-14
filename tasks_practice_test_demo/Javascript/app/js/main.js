function generateNumber(str){ 
    return new Promise(function(resolve, reject){
        const parsed = parseInt(str);
        if (isNaN(parsed))  reject("значение не является числом")
        else resolve(parsed);
    })
    .then(function(value){ console.log("Результат операции:", value);}, 
        function(error){ console.log("Возникла ошибка:", error);});
}
 
generateNumber("23");
generateNumber("hello");