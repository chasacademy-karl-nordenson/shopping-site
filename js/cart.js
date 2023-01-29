let shoppingCart = document.getElementById("shopping-cart")

let basket = JSON.parse(localStorage.getItem("data")) || []


// Produktdatat finns i variabeln shopData (se data.js)


const generateCartItems = () => {
    const gCart = shopData.map(element => {
        return     `<div class="cart-item">
        <img width="100" src=${element.image} alt="" />
        <div class="details">
            <div class="title-price-x">
            <h4 class="title-price">
                <p>${element.title}</p>
                <p class="cart-item-price"> ${element.price}</p>
            </h4>
            <i onclick="removeItem({--id--})" class="bi bi-x-lg"></i>
            </div>
            <div class="cart-buttons">
            <div class="buttons">
                <i onclick="decrement(${element.id})" class="bi bi-dash-lg"></i>
                <div id=${element.id} class="quantity">{total}</div>
                <i onclick="increment({--id--})" class="bi bi-plus-lg"></i>
            </div>
            </div>
            <h3> {total * price}</h3>
        </div>
        </div>`
    
    

    }).join(' ');

    shoppingCart.innerHTML = gCart;
 
}



generateCartItems();
