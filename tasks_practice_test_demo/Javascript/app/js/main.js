function sum(x, y, func){ 
    // если обработчик не установлен, то устанавливаем обработчик по умолчанию
    if(func===undefined) func = function(value){ console.log("Результат операции:", value);};
     
    return new Promise(function(resolve){
        const result = x + y;
        resolve(result);
    }).then(func);
}
sum(3, 5);
sum(25, 4, function(value){ console.log("Сумма:", value);});

//**Гибкая настройка функции */