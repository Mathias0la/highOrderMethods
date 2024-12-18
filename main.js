
  const products = [
    { name: "Smartphone", price: 800, category: "electronics" },
    { name: "Headphones", price: 150, category: "electronics" },
    { name: "Coffee Maker", price: 100, category: "home appliances" },
    { name: "Blender", price: 250, category: "home appliances" },
    { name: "Laptop", price: 1200, category: "electronics" },
    { name: "T-shirt", price: 50, category: "clothing" },
    { name: "Sneakers", price: 300, category: "clothing" }
  ];


//1. Use .filter() to extract all products that cost less than 200
//Using filter to check if price of product is less than 200

 const cheapProducts = products.filter((e) => e.price < 200)
 console.log(cheapProducts)

//2. Use .map() to make a list that only contain the product names
// Using .map() returning only the name of the element

const nameOfProducts = products.map((e) => e.name)
console.log(nameOfProducts)

//3. Use a chained combination of .filter() and .map() to list only
//the names of all products in a specific category (e.g. 'electronics')
//Checking if category is equal to electronics
//and then using map to create a new array from the elements in electronics

const electronics = products.filter((e) => e.category === "electronics").map((e) => e.name)
console.log(electronics)


//4. Use .some() to check if there are any products that cost more than 1000
//using some to check if there are any products with the price over 1000
// returns true
const expensiveProducts = products.some((e) => e.price > 1000)
console.log(expensiveProducts)


//5. Use .reduce() to find the total cost of all the products.
//Using reduce to find the total price of all products (2850)

const sumOfProducts = products.reduce((acc, num) => acc + num.price,0)
console.log(sumOfProducts)
