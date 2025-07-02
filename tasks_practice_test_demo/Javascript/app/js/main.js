function goodMorning(){
    console.log("Доброе утро");
}
function goodEvening(){
    console.log("Добрый вечер");
}
let message = goodMorning;      // присваиваем переменной message функцию goodMorning
message();      // Доброе утро
message = goodEvening;          // меняем функцию в переменной message
message();      // Добрый вечер