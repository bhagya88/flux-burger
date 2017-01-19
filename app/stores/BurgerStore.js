// get all dependencies
import { EventEmitter} from 'events';
import AppDispatcher  from '../dispatcher/AppDispatcher';

class BurgerStore extends EventEmitter{

	constructor(){
		super();

		this.burgers = [
		      {
		        id: 113464613,
		        burger_name: "Veg Burger",
		        devoured: false,
		        drinks:[]
		      },
		      {
		        id: 235684679,
		        burger_name: "Flux Burger",
		        devoured: false,
		        drinks:[]
		      },
		       {
		        id: 113464610,
		        burger_name: "Tomato Burger",
		        devoured: true,
		        drinks:[{ id: "23213", drink_name: "Water"}]
		      },
		      {
		        id: 235684689,
		        burger_name: "Eggplant Burger",
		        devoured: true,
		        drinks: [{ id: "23213", drink_name: "cola"}]
		      }
		    ];

		
	}

	getBurgers() {
    	return this.burgers;
  	}
	
	addBurger(burgerName){

		const id = Date.now();

		this.burgers.push({
			id,
			burger_name: burgerName,
			devoured: false,
			drinks:[]
		});

		this.emit('change');
		console.log(this.burgers);
	}

	devourBurgerWithDrink(payload){
		

		var idx = this.burgers.findIndex(burger => burger.id === payload.id);

		
		this.burgers = [...this.burgers.slice(0,idx),
		                
		          		{ id: this.burgers[idx].id,
		          		 burger_name: this.burgers[idx].burger_name,
		          		 devoured: true,
		          		 drinks:[{
		          		 	id: Date.now(),
							drink_name : payload.drinkName
		          		 	}]
		          		  },

		                ...this.burgers.slice(idx+1)];


		 console.log(this.burgers);

		 

		this.emit('change');
		console.log(this.burgers);
	}

  	addChangeListener(callback) {
    	this.on('change', callback);
  	}

  	removeChangeListener(callback) {
    	this.removeListener('change', callback);
  	}

	handleActions(action){
		console.log('Action recieved',action.type);

		switch (action.type){

			case 'ADD_BURGER':
			  this.addBurger(action.burgerName);
			  break;

			case 'DEVOUR_WITH_DRINK':
			 

			 this.devourBurgerWithDrink(action.payload);
			 break;

		}

		return true;
	}
}

const burgerStore = new BurgerStore;
AppDispatcher.register(burgerStore.handleActions.bind(burgerStore));

export default burgerStore;