function* getNumber(start, end, step){
    for(let n = start; n <= end; n +=step){
        yield n;
    }
}
const numberGenerator = getNumber(0, 8, 2);
 
for(num of numberGenerator){
    console.log(num);
}

//Инициализация генератора
//**Функция генератора, как и любая другая функция, может принимать параметры. 
// Соответственно через параметры мы можем передать в генератор некоторые данные.  */