import React, { Component } from 'react';
import BurgerActions from "../actions/BurgerActions";

class BurgerForm extends Component{

constructor(){
	super();

	this.state = {

		burgerName : ''

	}
}

handleSubmit(e){

	BurgerActions.addBurger(this.state.burgerName);
	e.preventDefault();

}

handleChange(e){

    this.setState({ [e.target.name] : e.target.value})

  }

render(){

	return(

		<div className="row">
		<h6 className="center">What burger do you like to eat today?</h6>
		 <form  className="col s12" >
	      <div className="row">
	        <div className="input-field col s4 offset-s4">
	          <textarea id="textarea1" name="burgerName" value={ this.state.burgerName} onChange= {this.handleChange.bind(this)} className="materialize-textarea white"></textarea>
	         </div>
	         <div className="input-field col s4 offset-s4 center">
	          <button type="submit" className="btn waves-effect waves-orange" onClick={this.handleSubmit.bind(this)}>Order</button>
	        </div>
	      </div>
	    </form>
		</div>
		);

}

}

export default BurgerForm