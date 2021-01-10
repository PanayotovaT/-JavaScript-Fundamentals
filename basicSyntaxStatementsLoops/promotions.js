function solve(typeOfDay, ageOfPerson) {

    let day = typeOfDay;
    let age = ageOfPerson;

    // Day / Age	  0 <= age <= 18	   18 < age <= 64	   64 < age <= 122
    // Weekday	         12$	               18$	                12$
    // Weekend	         15$	               20$	                15$
    // Holiday	         5$	                   12$	                10$
    let ticketPrice = 0;
    let invalidData = false;

    switch (day) {

        case "Weekday":

            if (age < 0 || age > 122) {
                invalidData = true;
            } else if (age <= 18) {
                ticketPrice = 12;
            } else if (age <= 64) {
                ticketPrice = 18;
            } else {
                ticketPrice = 12;
            }

            break;

        case "Weekend":
            if(age < 0 || age > 122) {
                invalidData = true;
            } else if (age <= 18){
                ticketPrice = 15;
            } else if (age <= 64){
                ticketPrice = 20;
            } else {
                ticketPrice = 15;
            }

            break;

        case "Holiday":

        if (age < 0 || age > 122) {
            invalidData = true;
        } else if (age <= 18){
            ticketPrice = 5;
        } else if (age <= 64){
            ticketPrice = 12;
        } else {
            ticketPrice = 10;
        }

            break;

    }
    
if(!invalidData){
    console.log(`${ticketPrice}$`);
} else {
    console.log("Error!")
}

}

solve('Holiday', 15)