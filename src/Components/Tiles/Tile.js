import React, { Component } from 'react';
import './Tile.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Tile extends Component {
	constructor(props) {
		super(props); 
		this.state = {
			editing: false, 
			moreProp : false
		}; 
		this.edit = this.edit.bind(this);
		this.remove = this.remove.bind(this);
		this.save = this.save.bind(this);
 		this.renderDisplay = this.renderDisplay.bind(this);
		this.addNew = this.addNew.bind(this);
		this.more = this.more.bind(this);
		 
	}
	edit() { 
		this.setState({
			editing: true
		}); 
	}
	
	more(e) {
		e.preventDefault();
		this.setState({
			moreProp: !(this.state.moreProp),
		 
		}); 		
	}
	 
	remove(e) {
		e.preventDefault();
		this.props.onClickRemove(this.props.index); 
	}
	save(e) {
		e.preventDefault();
		this.props.onChange(this._newText.value, this.props.index);
		this.setState({
			editing: false
		}); 
		 
	}
	addNew(e) {
		e.preventDefault();
		this.props.onClickNew();
	}
  

	renderDisplay() {
		const dataCompleteProp = {
			width : this.props.dataComplete +'% ', 
			backgroundColor : '#209cee',
			textAlign: 'left', 
			paddingLeft: '10px' , 
			fontSize: '0.5em'
		}; 
		
		if (this.state.moreProp)  {
			 return (
			 <div className='App App-header viewMore'>     
				<header>	
					<div>{this.props.dataTitle}  -  {this.props.dataTeacher}    </div>
				</header>
				<div className="smallFont subtitle">  
					<span> <FontAwesomeIcon icon="calendar-day" /> {this.props.dataDay} - {this.props.dataMonth}  </span>
					<span> <FontAwesomeIcon icon="clock" /> {this.props.dataTimetable}  ({this.props.dataDuration})  </span>
				</div>
				
				<div className="bar">	
					<div style={dataCompleteProp} ><span> {this.props.dataComplete}% </span>  </div>  
				</div> 
				
				{/* <div className="buttons">
					<span className="button is-small">Open course </span> 
					<span className="button is-small" onClick={this.remove}>Remove course </span>
  				</div>   */}
				<ul className="maxBtn">
					<li title="see details" onClick={this.more}> - </li>
				</ul> 
			  </div>
			)
		} else {
			 return (
				<div className='App App-header '>     
					<p className="smallFont leftAlign"> 
					 {this.props.dataDay} - {this.props.dataMonth}    </p>
					<header>{this.props.dataTitle}</header>
					<ul className="maxBtn">
						<li title="see details" onClick={this.more}> - </li>
					</ul> 
				</div>



			  )
			 
		 }
		
		
	}
	
	render() {
		  return this.renderDisplay() 
		} 
 	
}
export default Tile;