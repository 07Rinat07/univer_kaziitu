function* getNumber(){
    const n = yield 5;      // получаем значение numberGenerator.next(2).value
    console.log("n:", n);
    const m = yield 5 * n;  // получаем значение numberGenerator.next(3).value
    console.log("m:", m);
    yield 5 * m;
}
const numberGenerator = getNumber();
 
console.log(numberGenerator.next().value);      // 5
console.log(numberGenerator.next(2).value);     // 10
console.log(numberGenerator.next(3).value);     // 15

//Передача данных в метод next
//** С помощью next() можно передать в генератор данные. Переданные в этот метод данные 
// можно получить в функции генератора через предыдущий вызов оператора yield:*/