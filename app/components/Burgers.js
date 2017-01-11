import React, { Component } from 'react';
import DrinkForm from "./DrinkForm";

class Burgers extends Component{



render(){

	return(
	 <div className="row">
		
			<div className="col s6 offset-s1">
				<div className="row green-text"><h5>Burgers ready to be devoured</h5></div>

				 {'burgersToBeDevoured'}
					<div className="row white valign-wrapper">
						
						<div className="col s6  valign-wrapper"><p className="valign">{'id'}. {'burger_name'}</p></div>

						 <DrinkForm/>
					</div>
				{'each'}

			</div>

	
			<div className="col s4 offset-s1">
				<div className="row red-text"><h5>Devoured Burgers</h5></div>
				{'each burgersDevoured'}
				<div className="row">
					<p>{'id'}. {'burger_name'} 
					{'each drinks'}
						<i className="green-text">devoured with drink </i> {'drink_name'}
					{'each'}
					</p>
				</div>
				{'each'}
			</div>
		</div>

		);
	}

}

export default Burgers