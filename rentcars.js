//OBJECTIVE: We have a list of cars, each with a price and name. We will create a function where we pass
//the name of the car we want to rent and for how many days we want to rent.
//We also have a 'cash' variable that will determine if we can actually rent the car for that many days.

let availableCars = ["Honda", "Toyota", "Chevy"];
let carPrices = [100, 400, 600];
let rentedCars = [];
let cash = 500;



//This function will take one parameter, car name, and tell us if the car exist in our availableCars
function rentCar(carName){
    //console.log(carName);
    let isExist = false;
    let carCost = 0;

    for(let i = 0; i < availableCars.length; i++){
        if(carName == availableCars[i]){
            isExist = true;
            carCost = carPrices[i];
        }
        
    }

    //If the car exits, log it is available, and log its cost.
    if(isExist == true){
        console.log(`The ${carName} is available`);
        if(cash >= carCost)
            console.log(`We can afford it!`);
        else
            console.log(`Sorry, but we need more cash!`)
    }
    else{
        console.log(`That car ${carName} is not currently available`)
    }

}

//This function will take two parameters, car name, and days rented.
//With those, if the car exist in our availableCars[], tell us how much it cost to rent the car for that
//many days, and if we can afford it based on our 'cash' variable.

//Also, for homework or extra work, say how much money we have left if we can afford it. (Adjust your
//cash variable as needed to make this code work..)
rentCar("Honda");






