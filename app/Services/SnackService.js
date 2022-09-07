import { appState } from "../AppState.js";




class SnackService {

 buySnack(name) {
    console.log('Buy Snack', name);
    let snack = appState.snacks.find(snack => snack.name == name)
    console.log(snack);
   snack.buySnack()
   
  }


}

// NOTE export services as consts so they are now un-changeable
export const snackService = new SnackService()