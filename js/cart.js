let cart = 0;
const addToCart = ()=>{
    localStorage.setItem('cart' , ++cart);
    document.getElementById("cart-quantity").innerHTML = window.localStorage.getItem('cart');
}

console.log("hi hi");