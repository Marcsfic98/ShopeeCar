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

export{
    addItem,
    calculateTotal,
    deletItem,
    removeItem
}