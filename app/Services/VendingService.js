
import { appState } from "../AppState.js";
export class VendingService{
  static purchaseFood(name) {
    let money = appState.money
    let foundFood = appState.food.find(f => f.name = name)
    if(money >= foundFood.price ){
      money -= foundFood.price
    }
  }
  
  
}