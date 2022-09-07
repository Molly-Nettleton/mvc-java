import { appState } from "../AppState.js";
import { snackService } from "../Services/SnackService.js";




// NOTE functions on the outside of the class are PRIVATE, meaning the user cannot access them
function _drawSnacks() {
  let snacks = appState.snacks
  let template = ''
  snacks.forEach(p => template += p.Template)
  document.getElementById('snacks').innerHTML = template
}

function _drawTotal() {
  let total = 0
  let cartTotal = document.getElementById('cart-total')
  let snacks = appState.snacks
  snacks.forEach(snack => {
    total += snack.price*snack.quantity
  })
  // @ts-ignore
  cartTotal.innerText = total
}

function _drawCart() {
  let cartSnacks = appState.snacks;
  let template = '';
  cartSnacks.forEach((p) => {
    
      template += p.cartTemplate
    
  });
  // cartSnacks.forEach(s => template += s.cartTemplate)
  document.getElementById('cart').innerHTML = template;
}
export class SnackController {
  // NOTE place calls you want to run on load in the controller constructor
  constructor() {
    _drawSnacks()
  }


  buySnack(name) {
    console.log( 'Buying Snack:', name,);
    snackService.buySnack(name)
    _drawSnacks()
    _drawCart()
    _drawTotal()
  }


}