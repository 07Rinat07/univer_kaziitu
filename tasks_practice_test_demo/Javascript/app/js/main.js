function* getNumber(){
    yield 5;
}
const numberGenerator = getNumber();
const result = numberGenerator.next();
console.log(result);    // {value: 5, done: false}


//**Генераторы представляют особый тип функции, которые используются для генерации значений. 
// Для определения генераторов применяется символ звездочки *, который ставится после ключевого 
// слова function. */