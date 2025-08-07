async function addItem(useCart , item) {
    useCart.push(item);
}

async function deletItem(useCart , name) {
    const index = useCart.findIndex((item) => item.name === name);

    if(index !== -1 ){
        useCart.splice(index, 1)
    }
}

async function removeItem(useCart,index) {
    const deletIndex = index - 1;

    if(index >= 0 && index < useCart.length){
        useCart.splice(deletIndex,1)
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