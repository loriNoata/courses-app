import React, { Component } from 'react';
import NewMemo from './../NewMemo/NewMemo';
import './AsideBar.scss';  
  

export default class AsideBar extends Component {
	constructor(props) {
        super(props); 
		this.state = {
			toggle : this.props.isToggled, 
			wishTrainings: ''
		}; 
	
	   this.displayWishTrainings =  this.displayWishTrainings.bind(this);
	   this.toggleContainer =  this.toggleContainer.bind(this);
	   this.addNewNote = this.addNewNote.bind(this);
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

	toggleContainer () {
		this.setState((prevState) => {
			return {
				toggle: ! prevState.toggle
			}
			
		});
		
		this.props.onToggleContainer(this.state.toggle); 
	}

	addNewNote(val) {
  		const { wishTrainings } = this.state;  
		let updatedTrainings = [...wishTrainings, val];
		this.setState({
			...this.state, 
			wishTrainings : updatedTrainings
		});

 		return wishTrainings
  	} 

    render() {
		 
		console.log('aside props', this.props.isToggled);
        return(
			<aside className="conteiner">
				 <div id="hook" className={(this.state.toggle) ? 'activeHook' : 'inactiveHook'}  onClick={this.toggleContainer}> </div> 
 				<aside className={(this.state.toggle) ? 'wishingListWrraper' : 'inactive wishingListWrraper'} > 
					<h1>Wishing list </h1>
					<div className="listContainer"> 
					{ (this.state.wishTrainings)   
							? this.state.wishTrainings.map(this.displayWishTrainings) 
							: <h1> Is there no training you wish to add in the list ? </h1> 
							}
					</div> 

					<NewMemo onClickNew={this.addNewNote} /> 
				</aside>
			</aside>
        )
    }
   
}