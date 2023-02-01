import { appState } from "../AppState.js";
import { Vending } from "../Models/Vending.js";
import { vendingService} from "../Services/VendingService.js";


export class VendingController{
  drawVending(){
    let food = appState.food
    let vendingTemplate = ""
    food.forEach(f => vendingTemplate += Vending.template)
    document.getElementById("vending").innerHTML = vendingTemplate
  }
  
  drawMoney(){
    document.getElementById("money").innerText = `Money: ${appState.money}`
  }
  constructor(){
    this.drawMoney()
    this.drawVending()
  }

  purchaseFood(name){
    vendingService.purchaseFood(name)
    this.drawMoney()
  }

  addMoney(){
    vendingService.addMoney()
    this.drawMoney()
  }
  

}
