import { Snack } from "./Models/Snack.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { loadState } from "./Utils/Store.js"


class AppState extends EventEmitter {
  /** @type {import('./Models/Snack').Snack[]} */
  values = loadState('values', Snack)


  // NOTE this type line just adds funtionality to vs code, telling it only Players can exist in that array
  /** @type {import('./Models/Snack').Snack[]} */
  snacks = [new Snack('Snack1', .25, 0), new Snack('Snack2', .25, 0), new Snack('Snack3', .25, 0), new Snack('Snack4', .25,0)]



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
