function fibonachi(n)
{
    if (n === 0 || n === 1){
        return n;
    }
    else{
        return fibonachi(n - 1) + fibonachi(n - 2);
    }
}
const result = fibonachi(8); //21 
console.log(result); // 21