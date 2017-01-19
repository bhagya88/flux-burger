// get all dependencies
import React, { Component } from 'react';
import DrinkForm from "./DrinkForm";
import BurgerForm from "./BurgerForm";
import BurgerStore from '../stores/BurgerStore';

import BurgerActions from '../actions/BurgerActions';


class Burgers extends Component{

	constructor(){
		super();
		debugger;
		this.getBurgers = this.getBurgers.bind(this);

		this.state = {

			burgers: BurgerStore.getBurgers()

		};
	}


componentDidMount(){
	debugger;
    BurgerStore.addChangeListener(this.getBurgers);
}

componentWillUnmount() {
	debugger;
    BurgerStore.removeChangeListener(this.getBurgers);
    debugger;
}


getBurgers(){
	
	this.setState({
		burgers: BurgerStore.getBurgers()
	});
  
}

render(){

	const tobeDevouredBurgers = this.state.burgers.filter(burger => !burger.devoured);

	const devouredBurgers = this.state.burgers.filter(burger => burger.devoured);


	

	const tobeDevoured = tobeDevouredBurgers.map(burger => {
		return (
		<div className="row white valign-wrapper"  key={burger.id}>
			<p className="valign row" key={burger.id} >{burger.id} {burger.burger_name}</p> 
			 <DrinkForm id={burger.id}/>
		</div>
		); 
	});

	const devoured = devouredBurgers.map(burger => {
		return (
				<div className="row valign-wrapper"  key={burger.id}>
					<p  key={burger.id}>{burger.id} {burger.burger_name}{" devoured with Drink "}{burger.drinks[0].drink_name}
															
					</p>
					
				</div>
			); 
	    });

	return(
	 <div className="row">
			 <div className="row">
		
				<div className="col s7">
					<div className="row green-text"><h5>Burgers ready to be devoured</h5></div>
				
						{tobeDevoured} 
				</div>

		
				<div className="col s4 offset-s1">
					<div className="row red-text"><h5>Devoured Burgers</h5></div>
					

					  { devoured }
					
				</div>
			</div>

			 <div className="row">
			<BurgerForm/>
			</div>

		</div>

		);
	}

}

export default Burgers