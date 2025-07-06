const contacts = "Email: mycomp@gmail.com  Phones: +1-234-567-8901 and +1-234-567-8902";
const phonePattern = /\+\d-\d{3}-\d{3}-\d{4}/;
const result = phonePattern.exec(contacts);
console.log(result);     
// Консольный вывод
// ['+1-234-567-8901', index: 32, input: 'Email: mycomp@gmail.com  Phones: +1-234-567-8901 and +1-234-567-8902', groups: undefined]


//**Для поиска в строке подстроки, которая соответствовует регулярному выражению, применяется метод 
// exec() объекта RegExp. Этот метод принимает строку для поиска и возвращает результат в виде 
// массива. */

