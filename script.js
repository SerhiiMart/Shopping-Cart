if (document.readyState == 'loading'){
  document.addEventListener('DOMContentLoaded', ready);
}

let removeCartItemsButt = document.getElementsByClassName('btn-danger');
for ( let i =0; i< removeCartItemsButt.length; i++){
let button = removeCartItemsButt[i];
button.addEventListener('click', (e)=>{
  let buttonClicked = e.target;
  buttonClicked.parentElement.parentElement.remove();
  updateCartTotal();
})
}

let updateCartTotal = () => {
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