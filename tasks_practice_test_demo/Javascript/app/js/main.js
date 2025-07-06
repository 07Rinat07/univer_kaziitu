try{
    callSomeFunc();
    console.log("Конец блока try");
}
catch(error){
    console.log("Возникла ошибка!");
    console.log(error);
}

//**Получение ошибки в блоке catch. В качестве в качестве параметра в блок catch передается
//  объект с информацией об ошибке:
 