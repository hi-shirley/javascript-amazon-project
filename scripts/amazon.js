/*
main idea of JS
save data
generate HTML
make wev page interactive
*/
/*
import * as cartModule from '../data/cart.js';
cartModule.addToCart();
cartModule.cart;
*/
console.log('Hello, World!');
import {cart, addToCart} from '../data/cart.js';
import {products,loadProducts} from '../data/products.js';
import {formatCurrency} from './utils/money.js';

// load data from the json file
loadProducts(renderProductsGrid);
// generate the HTML
function renderProductsGrid(){
  let html = '';
  products.forEach((product)=>{
  html += `
  <div class="product-container">
    <div class="product-image-container">
      <img class="product-image"
        src="${product.image}">
    </div>

    <div class="product-name limit-text-to-2-lines">
      ${product.name}
    </div>

    <div class="product-rating-container">
      <img class="product-rating-stars"
        src=${product.getStarUrl()}>
      <div class="product-rating-count link-primary">
        ${product.rating.count}
      </div>
    </div>

    <div class="product-price">
      ${product.getPrice()}
    </div>

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

    ${product.extraInfoHTML()}

    <div class="product-spacer"></div>

    <div class="added-to-cart">
      <img src="images/icons/checkmark.png">
      Added
    </div>
    <button class="add-to-cart-button button-primary js-add-to-cart"
    data-product-id=${product.id}>
      Add to Cart
    </button>
  </div>
`;
});

document.querySelector('.products-grid').innerHTML = html;

function updateCartQuantity(){
  let cartQuantity = 0;
  cart.forEach((item)=>{
    cartQuantity += item.quantity;
  });

  document.querySelector('.cart-quantity').innerHTML = cartQuantity;
}

document.querySelectorAll('.js-add-to-cart')
  .forEach((button)=>{
    button.addEventListener('click', ()=>{
      // this step coming from data-product-id=${product.id} in the button(attributes:attach data to element)
      // this attribute should start with data-; convert product-id to productId as the name of the attribute
      const productId = button.dataset.productId; 
      
      addToCart(productId);
      
      updateCartQuantity();
      
    });
  });

 
}
