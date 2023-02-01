

export class Vending {

constructor(data){
  this.name = data.name
  this.price = data.price
  this.pic = data.pic
}

get template(){
  return `
  <div class="col-4 text-center pb-4">
        <img class="img-fluid vending-image" src="${this.pic}" alt="">
        <h3>${this.name}</h3>
        <h4>Price: ${this.price}</h4>
        <button onclick="app.vendingController.purchaseFood('${this.name}')" >Purchase</button>
      </div>
  `
}
}

