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
    
}

async function calculateTotal(useCart) {
     const result = useCart.reduce((total, item)=> total + item.subTotal(), 0 );
     console.log(result)
}

async function displayCart(useCart) {
    console.log("Shopee cart list: ");
    useCart.forEach((item , index) => {
        console.log(`${index + 1}. ${item.name} - R$ ${item.price} | ${item.quantity} | Subtotal= ${item.subTotal()}`)
    });
}

export{
    addItem,
    calculateTotal,
    deletItem,
    removeItem,
    displayCart
}