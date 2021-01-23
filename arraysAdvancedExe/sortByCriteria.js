function sorting(arr) {

    arr.sort();
    arr.sort((x, y) => x.length - y.length);
  

   return arr.join('\n');

}
console.log(sorting(["Isacc", "Theodor", "Jack", "Harrison", "George"]))