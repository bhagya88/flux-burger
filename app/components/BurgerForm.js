import React, { Component } from 'react';

class BurgerForm extends Component{



render(){

	return(

		<div className="row">
		<h6 className="center">What burger do you like to eat today?</h6>
		 <form  className="col s12">
	      <div className="row">
	        <div className="input-field col s4 offset-s4">
	          <textarea id="textarea1" name="burger_name" className="materialize-textarea white"></textarea>
	         </div>
	         <div className="input-field col s4 offset-s4 center">
	          <button className="btn waves-effect waves-orange">Order</button>
	        </div>
	      </div>
	    </form>
		</div>
		);

}

}

export default BurgerForm