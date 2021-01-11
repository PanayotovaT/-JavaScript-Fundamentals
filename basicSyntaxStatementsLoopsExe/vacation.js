function solve(numPeople, groupType, dayOfWeek) {

  
    let sum = 0;
    let price = 0;

    switch (groupType) {
        case "Students":
            switch (dayOfWeek) {
                case "Friday":
                    sum = numPeople * 8.45;
                    break;
                case "Saturday":
                    sum = numPeople * 9.80;
                    break;
                case "Sunday":
                    sum = numPeople * 10.46;
                    break;

            }
            if(numPeople >= 30){
                sum = 0.85 * sum;
            }

            break;

  

        case "Business":
            switch (dayOfWeek) {
                case "Friday":
                     price = 10.90;
                    break;
                case "Saturday":
                    price = 15.60;
                    break;
                case "Sunday":
                    price = 16;
                    break;
            }
            sum = numPeople * price;
            if(numPeople >= 100){
                sum -= 10 * price;
            }
            break;
             

        case "Regular":
            switch (dayOfWeek) {
                case "Friday":
                    sum = numPeople * 15;
                    break;
                case "Saturday":
                    sum = numPeople * 20;
                    break;
                case "Sunday":
                    sum = numPeople * 22.50;
                    break;
            }
            if (numPeople >= 10 && numPeople <= 20){
                sum = 0.95 * sum;
            }

            break;


    }
    console.log(`Total price: ${sum.toFixed(2)}`);




}

solve(40,
    "Regular",
    "Saturday");