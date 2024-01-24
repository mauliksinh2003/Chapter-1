var Product = [
    {Name : "mango" , Price : 100},
    {Name : "apple" , Price : 70},
    {Name : "banana" , Price : 40},
    {Name : "kiwi" , Price : 60},
]

function filterexpensive(Product){
    return Product.Price > 50 ;
}

var Expensiveproduct = Product.filter(filterexpensive);

console.log(Expensiveproduct)