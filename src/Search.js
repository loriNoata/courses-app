import React, {Component} from 'react'; 
import './Search.css';
import 'bulma/css/bulma.css'; 

export default class Search extends Component {
	constructor(props) {
		super(props); 
		this.state = {
			hasValueClass: "", 
			searchTerm: "", 
			search: false
		} 
	this.handlerChange = this.handlerChange.bind(this); 	
 	}

	handlerChange(event) { 
		event.preventDefault();
		this.setState({
			searchTerm : event.target.value, 
 		}); 

		if (event.target.value === '') {
			this.props.onResetSearch(); 
		} else {
			this.props.onSearch(event.target.value); 
		}

 	}
	 

	render() {
		  return (
			<form className="searchInput">
				<div className="field has-addons">
					<div className="control">
						<input className="input " type="text" placeholder="Search for an active class" onChange = {this.handlerChange} />
					 </div>
				</div>
			</form>
		  )
	} 
 	
}

