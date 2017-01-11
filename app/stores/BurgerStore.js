import { EventEmitter} from 'events';
import { dispatcher } from '../despatcher';

class BurgerStore extends EventEmitter{

	constructor(){
		super();

		this.burgers = [
		      {
		        id: 113464613,
		        burger_name: "Veg Burger",
		        devoured: false
		      },
		      {
		        id: 235684679,
		        burger_name: "Flux Burger",
		        devoured: false
		      },
		    ];
	}


	getDevoured(){

		return this.burgers.filter(burger => burger.devoured);

	}

	getTobeDevoured(){

		return this.burgers.filter(burger => ! burger.devoured);

	}


	addBurger(burgerName){

		const id = Date.now();

		this.burgers.push({
			id,
			burger_name: burgerName,
			devoured: false
		});

		this.emit('change');
	}

	handleActions(action){

		switch (action.type){

			case 'ADD_BURGER':
			  this.burgers.addBurger(action.burgerName);

		}

	}
}

const burgerStore = new BurgerStore;
dispatcher.register(burgerStore.handleActions.bind(burgerStore));

export default burgerStore;