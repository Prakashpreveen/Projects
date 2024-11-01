import {cart, addToCart} from '../javascript-amazon-project/data/cart.js';
import {products} from '../javascript-amazon-project/data/products.js';
import { formatCurrency } from './utils/money.js';
//DATA STRUCTURE [SAVE THE DATA]:
//GENERATE THE HTML:

let productHTML = '';

products.forEach((product) => {
    productHTML += `
        <div class="product-container">
          <div class="product-image-container">
            <img
              class="product-image"
              src="${product.image}"
            />
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${product.name}
          </div>

          <div class="product-rating-container">
            <img
              class="product-rating-stars"
              src="images/ratings/rating-${product.rating.stars * 10}.png"
            />
            <div class="product-rating-count link-primary">${product.rating.count}</div>
          </div>

          <div class="product-price">$${formatCurrency(product.priceCents)}</div>

          <div class="product-quantity-container">
            <select>
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart">
            <img src="images/icons/checkmark.png" />
            Added
          </div>

          <button class="add-to-cart-button button-primary js-addtocart-btn"
          data-product-id="${product.id}">Add to Cart</button> 
        </div>`; //
});


//Appending all Product data to the body:
document.querySelector('.js-products-grid').innerHTML = productHTML;


//Updating cart quantity number:
function updateCartQuantity() {
    let cartQuantity = 0;
    cart.forEach((cartItem) => {
        cartQuantity += cartItem.quantity;
    });

    document.querySelector('.js-cart-quantity')
        .innerHTML = cartQuantity;
}

document.querySelectorAll('.js-addtocart-btn').forEach((button) => {
    button.addEventListener('click',() => {
        const productId = button.dataset.productId; //kabab case to camel case
        addToCart(productId);
        updateCartQuantity();       
    });
});