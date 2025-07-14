const helloPromise = new Promise(function(resolve){
        resolve("Hello");
})
 
const worldPromise = helloPromise.then(function(value){
        // возвращаем новое значение
        return value + " World";
});
const metanitPromise = worldPromise.then(function(value){
        // возвращаем новое значение
        return value + " from METANIT.COM";
});
metanitPromise.then(function(finalValue){
        // получаем финальное значение
        console.log(finalValue);    // Hello World from METANIT.COM
});

//**Одним из примуществом промисов является то, что они позволяют создавать цепочки промисов. 
// Так, ранее мы рассмотрели применение методов then() и catch() для получения и обработки 
// результатов и ошибок асинхронной операции. При выполнении эти методы генерируют новый объект 
// Promise, для которого мы также можем вызвать методы then() и catch(), и, таким образом, построить 
// цепочку промисов. Благодаря этому мы можем обрабатывать подряд несколько асинхронных операций - 
// одна за другой. */