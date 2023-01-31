import { appState } from "../AppState.js";
import { VendingService } from "../Services/VendingService.js";
export class VendingController{
  drawVending(){
    
    let food = appState.food
    let vendingTemplate = ""
    food.forEach(f => template += `
    <div class="col-4 text-center pb-4">
          <img class="img-fluid vending-image" src="${f.pic}" alt="">
          <h3>${f.name}</h3>
          <h4>Price: ${f.price}</h4>
          <button>Purchase</button>
        </div>
    ` )
    document.getElementById("app").innerHTML = vendingTemplate
  }
  
  drawMoney(){
    document.getElementById("money").innerText = `Money: ${appState.money}`
  }
  constructor(){
    this.drawVending()


  }

  purchaseFood(){
    VendingService.purchaseFood()
  }

}
