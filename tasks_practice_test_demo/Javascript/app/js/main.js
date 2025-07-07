function* generateData(){
    try {
        yield "Tom";
        yield "Bob";
        yield "Hello Work";
    }
    catch(error) {
        console.log("Error:", error);
    }
} 
const personGenerator = generateData();
console.log(personGenerator.next());        // {value: "Tom", done: false}
personGenerator.throw("Something wrong");   // Error: Something wrong
console.log(personGenerator.next());        // {value: undefined, done: true}

//Обработка ошибок генератора

//**С помощью функции throw() мы можем сгенерировать в генераторе исключение. 
// В качестве параметра в эту функцию передается произвольное значение, которое представляет
//  информацию об ошибке: */