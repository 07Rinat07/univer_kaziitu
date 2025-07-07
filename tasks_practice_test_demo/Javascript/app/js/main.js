function* getNumber(){
    yield 5;
    yield 25;
    yield 125;
}
const numberGenerator = getNumber();
 
for(const num of numberGenerator){
    console.log(num);
}