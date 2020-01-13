//Create a program called 'conveniencestore.js'. This program will have a 3 element array of 'items',
//and another array of each item's price. We will also have another array which is empty called 'purchasedItems'
//Then create a function called 'findItem()' which takes a parameter. In the function block, console log to the 
//screen if that item is available in our 'availableItems' array.





//UPDATE: update your findItem() to take two parameters instead of one. The first param is the name of
//the item. The 2nd param is the quantity you want to purchase of that item. Console log the total price
//of the purchase and if we can afford it or not.


let availableItems = ["Kit-Kat", "MilkyWay", "Soda"];
let prices = [5, 5.5, 2.75];
let purchasedItems = [];
let myCash = 8.0;

buyItem("Kit-Kat", 1);

function buyItem(item, howMany){
    let isInStock = false;
    let itemCost = 0;
    for(i = 0; i < availableItems.length; i++){
        if(item == availableItems[i]){
            isInStock = true;
            itemCost = prices[i] * howMany;
        }
    }

    if(isInStock){
        console.log("We have that!");
        if(myCash >= itemCost){
            myCash -= itemCost;
            console.log(`Thank you for your puchase. Your change is ${myCash}`)
        }else{
            console.log(`Hey, you can't afford that!`)
        }
    }else{
        console.log("We don't have!")
    }
}