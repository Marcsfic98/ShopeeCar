import createItem from "./services/item.js"
import * as cartService from "./services/cart.js"

const myCart = [];

console.log("Welcome to the your Shopee cart !")

const item1 = await createItem("Camisa" ,70.99, 7)
const item2 = await createItem("Bermuda", 54.90,5 )

await cartService.addItem(myCart,item1)
await cartService.addItem(myCart,item2)

await cartService.displayCart(myCart)

//await cartService.deletItem(myCart , item2.name)

console.log("Shopee cart total is: ")
await cartService.calculateTotal(myCart)