async function* generatePersonAsync(people){
    for(const person of people)
        yield await new Promise(resolve => setTimeout(() => resolve(person), 2000));
}
async function printPeopleAsync(people){
    for await (const item of generatePersonAsync(people)) {
        console.log(item); 
    }
}
printPeopleAsync(["Tom", "Sam", "Bob"]);