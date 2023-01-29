const shop = document.getElementById('shop');
 
let basket = JSON.parse(localStorage.getItem("data")) || [];



// Produktdatat finns i variabeln shopData (se data.js)


const generateShop = () => {
    // Generera alla produkter med dynamisk HTML och Array.protype.map() samt join()
    const gShop = shopData.map(element => {
        return  `<div id=product-id-${element.id} class="item">
         <img width="220" src=${element.image} alt=""> 
         <div class="details">
             <h3>${element.title}</h3>
             <p>${element.description}</p>
             <div class="price-quantity">
             <h2>${element.price}-</h2>
             <div class="buttons">
                 <i onclick="decrement(${element.id})" class="bi bi-dash-lg"></i>
                 <div id=dec class="quantity">0</div>
                 
                 <i onclick="increment(${element.id})" class="bi bi-plus-lg"></i>
             </div>
             </div>
         </div>
        </div>`
    }).join(' ');

    shop.innerHTML = gShop;
    
    
}

generateShop();

const increment = (id) => {

    let card = document.getElementById(`product-id-${id}`)
    let quantity = card.querySelector('.quantity');
    const cartAmount = document.getElementById('cartAmount');
    quantity.innerHTML++;
    cartAmount.innerHTML++

    console.log(quantity)




}

const decrement = (id) => {
    let card = document.getElementById(`product-id-${id}`)
    let quantity = card.querySelector('.quantity');
    let cartAmount = document.getElementById('cartAmount');

    quantity.innerHTML--,
    cartAmount.innerHTML--


}

