import React, { Component } from 'react';
import './WishList.css';  
 

export default class WishListContainer extends Component {
	constructor(props) {
        super(props); 
		this.state = {
			toggle : this.props.isToggled
		}; 
	
	   this.displayWishTrainings =  this.displayWishTrainings.bind(this);
	   this.toggleContainer =  this.toggleContainer.bind(this);
    }

    displayWishTrainings(training, i) {
		return(
			<div className='displayWishTrainings' key={i}> 
				<ul>
					<li > {i+1} : {training} </li>
				</ul>
			</div>
		);
	} 

	toggleContainer() {
		this.setState({
			toggle: ! this.state.toggle
		});
		
		this.props.onToggleContainer(this.state.toggle); 
	}


	// componentWillReceiveProps(nextProps) {
	// 	// You don't have to do this check first, but it can help prevent an unneeded render
 	// 	  this.setState({ toggle: nextProps.isToggled });
	
	//   }

    render() {
		console.log('aside state', this.state.toggle);
		console.log('aside props', this.props.isToggled);
        return(
			<aside className="conteiner">
				<div id="hook" className={(this.state.toggle) ? 'activeHook' : 'inactiveHook'}  onClick={this.toggleContainer}> </div>

				<aside className={(this.state.toggle) ? 'wishingListWrraper' : 'inactive wishingListWrraper'} > 
					<h1>Wishing list </h1>
					<div> 
					{ (this.props.wishList)   
							? this.props.wishList.map(this.displayWishTrainings) 
							: <h1> Is there no training you wish to add in the list ? </h1> 
							}
					</div>  
				</aside>
			</aside>
        )
    }
   
}