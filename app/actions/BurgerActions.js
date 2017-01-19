import AppDispatcher from '../dispatcher/AppDispatcher';

const BurgerActions = {
  addBurger: function(burgerName) {
    AppDispatcher.dispatch({
      type: 'ADD_BURGER',
      burgerName
    });
  },
 

  devourBurgerWithDrink: function(burgerId,drinkName) {
    console.log(burgerId,drinkName);
    AppDispatcher.dispatch({
      type: 'DEVOUR_WITH_DRINK',
      payload : {
      	id: burgerId,
      	drinkName
      }
    });
  }
}
export default BurgerActions;



// export function addBurger(burgerName){

// 	dispatcher.dispatch({
// 		type: 'ADD_BURGER',
// 		burgerName
// 	});



// }

