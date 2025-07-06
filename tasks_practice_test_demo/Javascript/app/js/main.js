const contacts = "Email: mycomp@gmail.com Phones: +1-234-567-8901 and +1-234-567-8902";
const phonePattern = /\+\d-\d{3}-\d{3}-\d{4}/g;
let result;
while ((result = phonePattern.exec(contacts)) !== null){
    console.log("Phone number:", result[0]);
    console.log("Index: ", result.index);
}


//**в строке у нас два телефонных номера (может быть и больше). И мы хотим извлечь все эти номера,
//  а не только первый номер. В этом случае нам надо воспользоваться флагом g */