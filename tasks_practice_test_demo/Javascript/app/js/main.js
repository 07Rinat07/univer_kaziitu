const exp = /\d\d\d\d\d\d\d\d\d\d/;    // соответствует 10 цифрам подряд
 
const phone1 = "+12345678901";
const phone2 = "42345678901";
console.log(exp.test(phone1));   // true
console.log(exp.test(phone2));   // true