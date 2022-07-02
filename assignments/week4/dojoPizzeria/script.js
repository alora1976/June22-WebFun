// Create a function called randomPizza that uses Math.random() to create a random pizza!
function randomPizza() {
    var pizza = Math.floor(Math.random() * 6);
    var pizzaList = ["Cheese", "Pepperoni", "Sausage", "Mushroom", "Veggie", "Meat"];
    return pizzaList[pizza];
}
console.log(randomPizza());



function pizzaOven(crust,size,toppings){
    var pizza={};
    pizza.crust=crust;
    pizza.size=size;
    pizza.toppings=toppings;
    return pizza;
}
var pizza1=pizzaOven("deep dish", "medium", ["pepperoni", "mushrooms", "onions"]);
var pizza2=pizzaOven("thin", "large", ["sausage", "peppers"]);
console.log(pizza1, pizza2);