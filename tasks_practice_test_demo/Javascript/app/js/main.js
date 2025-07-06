const initialText = "Он пришел домой и сделал домашнюю работу";
const exp = /дом[а-я]*/gi;
const result = initialText.match(exp);
result.forEach(value => console.log(value));
// или так
// console.log(result[0]);
// console.log(result[1]);

//**Для поиска всех соответствий в строке применяется метод match():
// Символ звездочки указывает на возможность наличия после строки "дом" неопределенного количества символов от а до я. В итоге в массиве result окажутся следующие слова:

 