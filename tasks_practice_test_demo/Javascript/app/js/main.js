function person(name, age){
    console.log("Person", name, "created");
 
    function print(){
         console.log("Person ", name, " (" +age +")");
    }
    function work(){
         console.log("Person ", name, " works");
    }
    function incrementAge(value){
        age = age + value;
    }
    return [print, work, incrementAge];
}
 
const tom = person("Tom", 39);
tom[0]();       // print
tom[1]();       // work
tom[2](1);      // incrementAge
tom[0]();       // print