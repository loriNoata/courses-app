import React, { Component } from 'react';
import './AddNew.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default class AddNewWishCourses extends Component {
	constructor(props) {
		super(props); 
		this.state = {
			isVisible: false, 
			input: '', 
			title: 'the input is empty, please add a training you wish to follow', 
		 
		}; 

		this.addNew = this.addNew.bind(this);
		this.onHandleInputChange = this.onHandleInputChange.bind(this);
	}
	
	addNew(e) {
		 e.preventDefault();
		 
		if (this.state.input !== "") {
			debugger; 
			if (this.props.isToggled === false) {
				console.log(' trebuie sa deschidem aside-ul  --', this.props.isToggled);
				this.props.onToggleContainer(this.props.isToggled);
			}
			//this.props.onToggleContainer(this.props.isToggled); 
			this.props.onClickNew(this.state.input);
			this.setState({
				title : '', 
				isVisible : false, 
				input: '' 
				 
			});
		
		} else {
			this.setState({
				title : 'the input is empty, please add a training you wish to follow', 
				isVisible : true
			});
		}
	}
	 
	onHandleInputChange(e) {
		this.setState({
			input: e.target.value
		});
	}
  
	render() {
	 
		console.log('header props', this.props.isToggled);

		  return (
		  <a className="AddNewElem button">
			<header> 	
				Trainings: 	<input type='text' id='addWishTraining' onChange={this.onHandleInputChange}  value={this.state.value}/>
 			</header>
			 <div  onClick={this.addNew} data-toggle="tooltip" data-placement="top" title={this.state.title}> 
				<FontAwesomeIcon icon="plus-circle" /> 
				<p className={ this.state.isVisible ? 'isVisible' : 'isNotVisible'}> {this.state.title} </p>
			</div>
		  </a>
		);
	} 
 	
}
  