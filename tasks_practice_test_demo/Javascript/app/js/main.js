const generateNumber = {
  [Symbol.asyncIterator]() {
    return {
      current: 0,
      end: 10,
      next() {
        if (this.current <= this.end) {
          return Promise.resolve({ value: this.current++, done: false });
        }
        return Promise.resolve({ done: true });
      }
    };
  }
};
async function printNumbers(){
    for await (const n of generateNumber) {
        console.log(n);
   }
}
printNumbers();

//простейший пример - получение чисел: