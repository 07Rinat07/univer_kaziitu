const weakSet = new WeakSet([
    {lang: "JavaScript"}, 
    {lang: "TypeScript"}, 
    {lang: "Java"}
]);
 
 
for(item of weakSet){
    console.log(item);
}


//WeakSet не поддерживает перебор ни с помощью метода ForEach, которого у WeakSet нет, 
// ни с помощью цикла for.