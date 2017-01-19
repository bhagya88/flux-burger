import React, { Component } from 'react';
import BurgerActions from "../actions/BurgerActions";

class DrinkForm extends Component{

constructor(){
	super();

	this.state = {

		drinkName : ''

	}
}

handleSubmit(e){

	BurgerActions.devourBurgerWithDrink(this.props.id, this.state.drinkName);
	//e.preventDefault();

}

handleChange(e){
	if(this.isMounted()){
    	this.setState({ [e.target.name] : e.target.value})
  	}
  }



render(){

	return(
		<form >
			<div className="col s2 offset-s1" >
				<p><i>Drink</i></p>
			</div>
			<div className="col s4 valign-wrapper" >
				<input type="text" id="drink" name="drinkName" value={this.state.drinkName} onChange= {this.handleChange.bind(this)} className="input-field valign" />
			</div>
			<div className="col s1 m1 valign-wrapper" >
				<p>
				 <button type="submit" className="btn waves-effect waves-orange" onClick={this.handleSubmit.bind(this)}>Devour</button>
				</p>
			</div>
		</form>
		);

}

}

export default DrinkForm