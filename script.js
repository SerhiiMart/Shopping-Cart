let removeCartItemsButt = document.getElementsByClassName('btn-danger');

for ( let i =0; i< removeCartItemsButt.length; i++){
let button = removeCartItemsButt[i];
button.addEventListener('click', (e)=>{
  let buttonClicked = e.target;
  buttonClicked.parentElement.parentElement.remove();
  updateCardTotal();
})
}

let updateCardTotal = () => {
  let cartItemContainer = document.getElementsByClassName('cart-items')[0];
  let cartRows = cartItemContainer.getElementsByClassName('cart-row')
  for ( let i =0; i< cartRows.length; i++){
    let cartRow = cartRows[i];  
    let priceElem = cartRow.getElementsByClassName('cart-price')[0];
  }
}