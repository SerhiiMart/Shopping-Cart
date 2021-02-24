/// Checker
(document.readyState == 'loading') ? document.addEventListener('DOMContentLoaded', ready) : ready();

  
function ready (){
    let removeCartItemsButt = document.getElementsByClassName('btn-danger');
    console.log(removeCartItemsButt);
    for ( let i =0; i< removeCartItemsButt.length; i++){
    let button = removeCartItemsButt[i];
    button.addEventListener('click', removeCardItem);
    }
    let quantityInputs = document.getElementsByClassName('cart-quantity-input');
    for ( let i =0; i < quantityInputs.length; i++) {
      let input = quantityInputs[i];
      input.addEventListener('change', quantityChanged);
    }
    let addToCartButtons = document.getElementsByClassName('shop-item-button');
    for ( let i = 0; i < addToCartButtons.length; i++) {
      let button = addToCartButtons[i];
      button.addEventListener('click', addToCartClicked);
    }
}

function removeCardItem(e){
  let buttonClicked = e.target;
  buttonClicked.parentElement.parentElement.remove();
  updateCartTotal();
}

function quantityChanged(e){
  var input = e.target;
  if (isNaN(input.value) || input.value <= 0){
    input.value = 1;
  }
  updateCartTotal();
}


function addToCartClicked(e) {
  let button = e.target;
  let shotItem = button.parentElement.parentElement;
  let title = shotItem.getElementsByClassName('shop-item-title')[0].innerText;
  let price = shotItem.getElementsByClassName('shop-item-price')[0].innerText;
  let imageSrc = shotItem.getElementsByClassName('shop-item-image')[0].src;
  console.log(title, price, imageSrc);
  addItemToCart(title, price, imageSrc);
}

function addItemToCart(title, price, imageSrc){
  let cartRow = document.createElement('div');
  cartRow.classList.add('cart-row');
  let cartItems = document.getElementsByClassName('cart-items')[0];
  let cartItemNames = cartItems.getElementsByClassName('cart-item-title');
  for (let i = 0; i < cartItemNames.length; i++){
    if (cartItemNames[i].innerText == title) {
      alert ('This item is already added to the cart!');
      return;
    } 
  }
  let cartRowContents = `
  <div class="cart-item cart-column">
    <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
           <span class="cart-item-title">${title}</span>
                    </div>
                    <span class="cart-price cart-column">${price}</span>
                    <div class="cart-quantity cart-column">
                        <input class="cart-quantity-input" type="number" value="1">
                        <button class="btn btn-danger" type="button">REMOVE</button>
                    </div>
                </div>`;
  cartItems.append(cartRow);
  cartRow.innerHTML = cartRowContents;
}

function updateCartTotal() {
  let cartItemContainer = document.getElementsByClassName('cart-items')[0];
  let cartRows = cartItemContainer.getElementsByClassName('cart-row')
  var total = 0;
  for ( let i =0; i< cartRows.length; i++){
    let cartRow = cartRows[i];  
    let priceElem = cartRow.getElementsByClassName('cart-price')[0];
    let quantityElem = cartRow.getElementsByClassName('cart-quantity-input')[0];
    let price = parseFloat(priceElem.innerText.replace('$', ''));
    let quantity = quantityElem.value;
    total += price*quantity;
  }
  total = Math.round(total*100)/100;
  document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total;
}