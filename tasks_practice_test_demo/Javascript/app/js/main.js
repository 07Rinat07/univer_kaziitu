class Database{
    constructor(){
        this.data = ["Tom", "Sam", "Bob"];
    }
    // получение данных
    getItem(index){ 
        this.open();
        try{
             if(index > 0 && index < this.data.length)
                return this.data[index];
            else
                throw "Некорректный индекс";
        }
        finally{    // даже если сгенерирована ошибка, то этот блок выполняется
            this.close();   // при генерации исключения эта строка также будет выполняться
        }
    }
    // открытие бд
    open(){ console.log("Подключение к базе данных установлено"); }
    // закрытие бд
    close(){ console.log("Подключение к базе данных закрыто"); }
}
 
const db = new Database();
try {
    db.getItem(5);   // возвращаем полученный элемент
} catch(err) {
    console.error(err); // если произошла ошибка обрабатываем ее 
}


//**если нам все таки надо вызвать метод close? Мы можем поместить его вызов в блок finally: */