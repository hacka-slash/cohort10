let availableFruit = ["Apples", "Bananas", "Strawberries"];
let prices = [5.40, 6.70, 8.55];
let quantity = [2, 4, 6];

//Log apple, quantity sold, total amount
for(var i = 0; i < availableFruit.length; i++ ){
    console.log(availableFruit[i], "quantity Sold: ", quantity[i].toFixed(2), "total Amount: $"+ (prices[i] * quantity[i]).toFixed(2));
}