const item = [ {name: 'Bike', price:100}, 
             {name: 'TV', price:200}, 
             {name: 'Album', price:10}, 
             {name: 'Book', price:5}, 
             {name: 'Phone', price:500}, 
             {name:'Computer',price:1000}
            ];
var products = {};
for(let i = 0; i < item.length; i++){
  var prod_name = item[i].name;
  products[prod_name] = item[i].price;
// console.log(products)
}

// lowest price
let prods = Object.keys(products)
var lowest_price= ["product", Object.values(products)[0]];
var highest_price = ["product", Object.values(products)[0]];
var total_price = 0;
var total_price_upper10 = 0;

// get the highest and lowest price
for(let j=0; j< prods.length; j++){
    // total price
    total_price = total_price + products[prods[j]];
    // total price excluding those less than 10
    if (products[prods[j]] >= 10){
        total_price_upper10 = total_price_upper10 + products[prods[j]];
    }
  //getting the cheapest product
  if (products[prods[j]] < lowest_price[1]) {
    lowest_price[1] = products[prods[j]];
    lowest_price[0] = prods[j];
  }
  //getting the most expensive product
  else if(products[prods[j]] > highest_price[1]) {
    highest_price[1] = products[prods[j]];
    highest_price[0] = prods[j];
  }
}
console.log("If I have not enough money, I will buy "+lowest_price[0]+" because its price is: ","$", lowest_price[1]);
console.log("If I have enough money, I will buy "+highest_price[0]+" because its price is: ","$", highest_price[1]);
console.log("total price including those less than 10: $", total_price);
console.log("Total price excluded less than 10: $", total_price_upper10);