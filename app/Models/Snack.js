
export class Snack {
  // better not to hard code values
  // name = 'mick'
  // score = 0
  // 
  // let values be created on Player Creation
  constructor(name, price, quantity) {
    this.name = name
    this.price = price
    this.quantity = quantity
  }

  buySnack() {
    this.quantity++
    console.log(this.name, 'bought for', this.price)
  }

  get Template() {
    return `
    <div class="col-md-6 text-center p-2 bg-light elevation-2">
      <h3>${this.name}</h3>
      <h3 class="text-warning">Price: ${this.price}</h3>
      <h3 class="text-warning">Quantity: ${this.quantity}</h3>
      <button class="btn btn-primary w-100" onclick="app.snackController.buySnack('${this.name}')">Buy</button>
      
    </div>
    
    `
  }

  get cartTemplate() {
  return` <div class=" bg-info elevated-2 text-light rounded p-2 my-2 border border-light ">
  <p class="card-title">${this.name}</p>
  
  <span class="text-light d-flex"<p>$${this.price*this.quantity}</p><span >x${this.quantity}</span></span>
</div>`
}

}