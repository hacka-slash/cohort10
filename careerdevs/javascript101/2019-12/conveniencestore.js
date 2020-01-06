let items = ['chips', 'soda', 'water', 'starbursts', 'M&Ms'];
let cost = [1.50, 1, 1.25, .75, .75];
let cash = 5.00;
let itemsPurchased = [];

//A function that accepts two parameters, item name and cost and logs to us whether
//we can afford it.

//After we make our purchase, if we can afford it, log to the screen how much money we have left
function purchaseItem(snack, quantity) {
    for(i = 0; i < items.length; i++){
        if(snack == items[i]){

            //If we can afford it, do the following code block:
            if((cost[i] * quantity) <= cash){
                let cashRemaining = cash - cost[i] * quantity;

                console.log("Thank you for your purchase");
                console.log("You have $", cashRemaining,"remaining");

                for(let j = 0; j < quantity; j++){
                    itemsPurchased.push(snack);
                }
                console.log('\n');
                console.log("These are the items in your bag:")
                console.log(itemsPurchased);
                
            }
            else{
                console.log("Sorry but you can't afford this");
            }
        }

    }

}

purchaseItem('chips', 3);