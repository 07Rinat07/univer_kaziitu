function sum(x, y){ 
    return new Promise(function(resolve){
        const result = x + y;
        resolve(result);
    });
}
 
async function calculate(){
    const value1 = await sum(5, 3);
    console.log("Результат 1 асинхронной операции:", value1);
    const value2 = await sum(6, 4);
    console.log("Результат 2 асинхронной операции:", value2);
    const value3 = await sum(7, 5);
    console.log("Результат 3 асинхронной операции:", value3);
}
calculate();    
// Результат 1 асинхронной операции: 8
// Результат 2 асинхронной операции: 10
// Результат 3 асинхронной операции: 12

//**Асинхронная функция может содержать множество асинхронных операций, к которым применяется 
// оператор await. В этом случае все асинхронные операции будут выполняться последовательно: */