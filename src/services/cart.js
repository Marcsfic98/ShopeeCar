async function addItem(useCart , item) {
    useCart.push(item);
}

async function deletItem(useCart , name) {
    const index = useCart.findIndex((item) => item.name === name);

    if(index !== -1 ){
        useCart.splice(index, 1)
    }
}

async function removeItem(useCart,item) {
    const indexFound = useCart.findIndex((p)=>p.name === item.name)

    if(indexFound == -1){
        console.log("item nao encontrado");
        return;
    }
    
    if(useCart[indexFound].quantity > 1){
        useCart[indexFound].quantity -= 1;
        return;
    }

     if(useCart[indexFound].quantity == 1){
        useCart.splice(indexFound,1);
        return;
     }

}

async function calculateTotal(useCart) {
    console.log("\nShopee cart total is: \n")
     const result = useCart.reduce((total, item)=> total + item.subTotal(), 0 );
     console.log(result)
}

async function displayCart(useCart) {
    console.log("Shopee cart list: ");
    useCart.forEach((item , index) => {
        console.log(`\n${index + 1}. ${item.name} - R$ ${item.price} | ${item.quantity} | Subtotal= ${item.subTotal()}`)
    });
}

export{
    addItem,
    calculateTotal,
    deletItem,
    removeItem,
    displayCart
}