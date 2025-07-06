// определение обертки для обработки ошибок
function tryCatch (fn){
  try{
    return [fn(), null];
  }
  catch(err){
    return [null, err];
  }
}
 
// использование
const sqrt = (x) => {
  if(x < 0) throw new Error(`Number ${x} is invalid`);
  return Math.sqrt(x);
}
 
// пример получения ошибки
const [res1, err1] = tryCatch(()=>sqrt(-4));
 
if(err1) console.error(err1);
else console.log("sqrt(-4):", res1);
 
// пример получения результата
const [res2, err2] = tryCatch(()=>sqrt(4));
 
if(err2) console.error(err2);
else console.log("sqrt(4):", res2);