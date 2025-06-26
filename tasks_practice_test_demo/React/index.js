const handleSubmit = (e) =>{
    e.preventDefault();
    if(nameValid && ageValid){
        console.log(`Имя: ${name} Возраст: ${age}`);
    }
    else console.log("Данные не корректны")
}