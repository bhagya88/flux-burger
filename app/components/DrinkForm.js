import React, { Component } from 'react';

class DrinkForm extends Component{

render(){

	return(
		<form >
			<div className="col s2" >
				<p><i>Drink</i></p>
			</div>
			<div className="col s4 valign-wrapper" >
				<input type="text" id="drink" name="drink_name" className="input-field valign" />
			</div>
			<div className="col s1 m1 valign-wrapper" >
				<p>
				<button name="id" className="valign" id={'id'}>Devour</button>
				</p>
			</div>
		</form>
		);

}

}

export default DrinkForm