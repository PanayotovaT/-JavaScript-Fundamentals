let arr = [1, 5, 7, 2, 4];
// let reduced = arr.reduce((a,e) => (a + e), 0);
let reduced = arr.reduce((a, e) => {
   return (a + e)
}, 0)
console.log(reduced);