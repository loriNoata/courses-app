import React, {Component} from 'react'; 
import './Search.css';
import 'bulma/css/bulma.css'; 

export default class SortBy extends Component {
	constructor(props) {
		super(props); 
		this.state = {
			value: '', 
			sortByOption: ''
		} 

 
	 this.handleChange = this.handleChange.bind(this); 	
	 
	}

	handleChange(event) { 
		event.preventDefault();
		if (event.target.value !== '') {
			this.setState({
				value : event.target.value, 
			}); 
			this.props.onHandleSort(event.target.value);
		} else {
			
			console.log(this.props);
		}
	 }
	 
 	 
 

	render() {
 		  return (
			<React.Fragment>
 			<div className="control">
  				<div className="select">
					<select value={this.state.value} onChange={this.handleChange}> 
					    <option value=''>Sort by</option>
						<option value='complete'>Complete</option>
						<option value='duration'> Duration   </option>
						<option value='teacher'> teacher </option>	
						<option value='level'> level </option>	
 			  		</select>
  				</div>
 		  	</div>

		   </React.Fragment>

 
		  )
	} 
 	
}

 