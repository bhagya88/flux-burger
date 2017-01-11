import { EventEmitter} from 'events';
import { dispatcher } from '../despatcher';

class BurgerStore extends EventEmitter{

	constructor(){
		super();

		this.burgers = [
      {
        id: 113464613,
        burger_name: "Veg Burger",
        complete: false
      },
      {
        id: 235684679,
        burger_name: "Flux Burger",
        complete: false
      },
    ];


	}
}