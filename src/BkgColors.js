import React, {Component} from 'react'; 
import './BkgColors.css';

export default class ColorContainers extends Component{
	constructor(props) {
		super(props); 
		// this.allColors = this.props.colors;
		this.state = {
			colorSelected : "yellow", 
			colors: this.props.colors
		}
		this.changeColor = this.changeColor.bind(this); 
		this.displayColors = this.displayColors.bind(this); 
 	}
	changeColor(event) {
		event.preventDefault();
 		this.props.onClickColor(event.target.className); 
		this.setState({
			colorSelected : event.target.className, 
			colors: this.props.colors
		});	
	}

	displayColors(color, i) {
 		return(
			<li key = {i} className={color} onClick={this.changeColor} > </li> 
		)
	}
	
	render() { 		
		return (
			<div className='BkgColors'>
				 <ul className="coverBox">
					 {this.state.colors.map(this.displayColors)}  
				 </ul>
			</div>
		)
	}
}

  