import { Value } from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { loadState } from "./Utils/Store.js"
import { Vending } from "./Models/Vending.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = loadState('values', [Value])


  money = 20;
  /** @type {import('./Models/Vending').Vending[]} */
  food = [
   new Vending( {
      name: "Taco",
      price: 3,
      pic: "https://www.tacobueno.com/assets/food/tacos/Taco_Crispy_Beef_990x725.jpg"
    }),
   new Vending( {
      name: "Burrito",
      price: 4.5,
      pic: "https://cdn.britannica.com/13/234013-050-73781543/rice-and-chorizo-burrito.jpg"
    })
  ]

}

export const appState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
