function solve(year, month, date) {

    let day;
    month = month - 1;
    day = new Date(year, month, date);

    let nextDay = new Date(day);
    nextDay.setDate(nextDay.getDate() + 1)


   
    console.log(`${nextDay.getFullYear()}-${nextDay.getMonth() + 1}-${nextDay.getDate()}`);
  

}

solve(2020, 02, 29);