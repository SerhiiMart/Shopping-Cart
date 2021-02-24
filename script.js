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
  document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total;
}