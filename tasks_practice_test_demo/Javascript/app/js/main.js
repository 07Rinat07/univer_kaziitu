const initialText = "Сегодня была прекрасная погода";
const exp = /\s/;
const result = initialText.split(exp);
result.forEach(value => console.log(value));

//**Метод split может использовать регулярные выражения для разделения строк. 
// Например, разделим приложение по словам (а точнее по пробелам) с помощью метасимвола "\s": */