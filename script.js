let removeCardItems = document.getElementsByClassName('btn-danger');

for ( let i =0; i< removeCardItems.length; i++){
let button = removeCardItems[i];
button.addEventListener('click', (e)=>{
  let buttonClicked = e.target;
  buttonClicked.parentElement.parentElement.remove();
})
}