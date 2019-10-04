import React, { Component } from 'react';
import './NewMemo.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default class NewMemo extends Component {
	constructor(props) {
		super(props); 
		this.state = {
			isVisible: false, 
			input: '', 
			title: 'the input is empty or unchanged, please add a new memo', 
		}; 

		this.addNew = this.addNew.bind(this);
		this.onHandleInputChange = this.onHandleInputChange.bind(this);
	}
	onHandleInputChange(e) {
		this.setState({
			input: e.target.value
		});
	}

	addNew(e) {
		// e.preventDefault();
	 
		console.log("before clear the input", this.state.input);
		if (this.state.input !== "") {
			this.props.onClickNew(this.state.input);
			this.setState({
					title : '', 
					isVisible : false, 
					input: '', 
 				});
		
		} else {
			this.setState({
				title : 'the input is empty, please add a training you wish to follow', 
				isVisible : true, 
				input: '' 
			});
		}

		console.log('after' , this.state.input);
	}
	 

  
	render() {
	 
		  return (
		  <a className="AddNewElem button">
			<header> 	
			    <p className="p-is-small"> Add new memo</p>
				<input type='text' id='addWishTraining'  value={this.state.input} onChange={this.onHandleInputChange}/>
 			</header>
			 <div onClick={this.addNew} data-toggle="tooltip" data-placement="top" title={this.state.title}> 
				<FontAwesomeIcon icon="plus-circle" /> 
				<p className={ this.state.isVisible ? 'isVisible' : 'isNotVisible'}> {this.state.title} </p>
			</div>
		  </a>
		);
	} 
 	
}
  