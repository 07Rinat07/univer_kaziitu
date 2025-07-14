const promise1 = new Promise((resolve, reject) => {
    reject("error in promise1");
    setTimeout(resolve, 500, "Hello");
});
const promise2 = new Promise((resolve) => {
    setTimeout(resolve, 1000, "World");
});
Promise.any([promise1, promise2])
    .then(value => console.log(value))       // World
    .catch(error => console.log(error));

    //**В данном случае первым выполненным будет промис promise1, однако он завершается с ошибкой. Поэтому в метод then(value => console.log(value)) в качестве value будет передана строка "World" - результат промиса promise2, который успешно завершается.

//Может показаться, что Promise.any() делает то же самое, что и Promise.race(), однако эти функции отличаются в отношении того, как они работают с промисами, которые завершились с ошибкой. Promise.race() возвращает первый завершенный промис, вне зависимости завершился он с ошибкой или нет. А Promise.any() возвращает первый успешно завершенный промис (если такой имеется). Если же все промисы завершились с ошибкой, то генерируется исключение типа AggregateError: */