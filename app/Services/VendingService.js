
import { appState } from "../AppState.js";


class VendingService{
  purchaseFood (name) {
    let money = appState.money
    let food = appState.food
    let foundFood = food.find(f => f.name == name)
    if(money >= foundFood.price ){
      appState.money -= foundFood.price
      console.log(appState.money);
    }
  }
  addMoney(){
    appState.money += .25
  }
  
}

export const vendingService = new VendingService()