const exp = /@(yandex|mail).ru/;    // соответствует либо "@yandex.ru" либо "@mail.ru"
 
const email1 = "tom@mail.ru";
const email2 = "tom@gmail.ru";
const email3 = "tom@yandex.ru";
console.log(exp.test(email1));   // true
console.log(exp.test(email2));   // false
console.log(exp.test(email3));   // true