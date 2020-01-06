//Pass to the function a car Name and number of days and get in return whether or not we can afford to rent the car for that many days.
let carTypes = ['economy', 'midsize', 'Luxury'];
let availableCars = ['Honda', 'Pontiac', 'Cadillac'];
let rentalCost = [50, 100, 200];
let daysRented = [8, 9, 3];
let totalMade = 0;

let carsRented = [];

let myMoney = 1000;

//This function will recieves two parameters, the name of the car, and the days we want to rent it for. It will tell us if we can afford to rent that car for specified number of days
function rentCar(carName, numberOfDays){
    //console.log("This is how you rent cars!");
    //console.log("We are renting a", carName, "for ", numberOfDays, "days");

    //how much it cost to rent 'carName' for the 'numberOfDays'
        //Must be compared to our 'myMoney' variable to see if we can afford it
    let rentingCost;
    for(i = 0; i < availableCars.length; i++){
        if(carName == availableCars[i]){
            console.log("The",availableCars[i], "cost", rentalCost[i], "per day");
        }
    }

    //FUNCITON MUST LOG:
        //Car name, cost to rent it for the number of days we want, and if we can afford it
    

}

//This function call sends two arguments, the name of the car, and the days rented
rentCar('Honda', 8);

//console.log(carName);

// for(let i = 0; i < carTypes.length; i++){
//     // console.log(availableCars[i], "is a", carTypes[i], "car, was rented for", daysRented[i], "days at the cost of $"+ rentalCost[i], "per day for a total of $"+ rentalCost[i] * daysRented[i]);
//     if(rentalCost[i] * 7 <= myMoney){
//         console.log("We can afford to rent", availableCars[i], "for the week!");
//     }
//     else{
//         console.log("We cannot afford to rent", availableCars[i],  "for the week")
//     }

//     totalMade += rentalCost[i] * daysRented[i]
// }

//console.log('\n');
//console.log("The total amount made was: $" + totalMade);



