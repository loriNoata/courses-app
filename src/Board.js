import React, {Component} from 'react'; 
import Tiles    from './Components/Tiles/Tiles';
import Search   from './Components/Search/Search';
import SortBy   from './Components/Search/SortBy'; 
import ColorContainers from './Components/BkgColor/BkgColors'; 
import AsideBar from './Components/AsideBar/AsideBar'; 
import AsideMenu  from './Components/Menu/AsideMenu'; 
import ContactUs from './Components/ContactUs/ContactUs'; 
import Chart from './Components/Chart/chart'; 
import TrainingsTypes from './Components/Tiles/Submenus/TrainingsTypes'; 
import { BrowserRouter as Router, Route } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core'; 
import { faCheckSquare, faClock, faPlusCircle, faCalendarDay, faBell, faCog, faBars, faEllipsisV, faEnvelope, faEnvelopeOpenText, faPhoneAlt, faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons'; 
library.add(faCheckSquare, faClock, faPlusCircle, faBell, faCalendarDay, faCog, faBars, faEllipsisV, faEnvelope, faEnvelopeOpenText, faPhoneAlt, faMapMarkerAlt); 

function stringSort(a, b) {
	if (a < b) { return -1; }
	if (a > b) { return 1;  }
	return 0;
}

function numberSort(a, b) {
 	return a - b
}

export default class Board extends Component{
	constructor(props) {
		super(props); 
		this.state = {
			changeColorClass: "", 
			isToggled : true, 
			colors: [ 'red', 'yellow', 'blue', 'grey' ],
			menu : [{ menu: 'Home',       icon: 'cog', submenu :null}, 
					{ menu: 'Trainings',  icon: 'check-square',  submenu: ['Active','Complete', 'Tests']}, 
					{ menu: 'Contact Us', icon: 'envelope', submenu: ' '}], 
			coursesSortBy: '', 
			notes : [{
				id: 10, 
				title : "English ",
				level: '1', 
				timetable: "10:00",
				teacher: "Oana Pelea", 
				duration: "02:30:00", 
				active: true, 
				data : {
					day: 11, 
					month : "January"
				}, 
				complete: 20
			}, 
			{
				id: 11, 
				title : "Chemistry",
				level: '2', 
				timetable: "12:30",
				teacher: "Cauc Mihaela", 
				duration: "02:30", 
				active: false,
				data : {
					day: 21, 
					month : "February"
				},  
				complete: 98
			}, 
			{
				id: 13,  
				level: '3', 
				title : "SAP Basics",
				timetable: "17:30",
				teacher: "Katarina Bo", 
				duration: "02:10", 
				active: false,
				data : {
					day: 21, 
					month : "March"
				},  
				complete: 60
			}, 
			{
				id: 14, 
				level: '3', 
				title : "Sport",
				timetable: "14:30",
				teacher: "Gica Hagi", 
				duration: "01:45", 
				active: false,
				data : {
					day: 21, 
					month : "Aprile"
				}, 
				complete: 100
			}, 
			{
				id: 15, 
				level: '2', 
				title : "Database ",
				timetable: "12:30",
				teacher: "Na Andrei ", 
				duration: "2h:30min", 
				active: true,
				data : {
					day: 21, 
					month : "July"
				}, 
				complete: 100
			}, 
			{
				id: 16, 
				title : "History",
				level: '3',
				timetable: "17:30",
				teacher: "Edu Bib ", 
				duration: "0:45", 
				active: false,
				data : {
					day: 19, 
					month : "August"
				}, 
				complete: 0
			}, 
			{
				id: 17,  
				level: '3', 
				title : "SAP Advanced",
				timetable: "17:30",
				teacher: "Katarina Bo", 
				duration: "02:30", 
				active: true,
				data : {
					day: 21, 
					month : "January"
				},  
				complete: 80 
			}, 
			{
				id: 18, 
				level: '3', 
				title : "Sport - Yoga",
				timetable: "14:30",
				teacher: "Gigi Becali", 
				duration: "01:45", 
				active: true,
				data : {
					day: 21, 
					month : "July"
				}, 
				complete: 70
			}, 
			{
				id: 19, 
				level: '2', 
				title : " Music",
				timetable: "12:30",
				teacher: "Hulio Eglesias", 
				duration: "20:50", 
				active: true,
				data : {
					day: 21, 
					month : "August"
				}, 
				complete: 66
			},
			{
				id: 20, 
				title : "History",
				level: '3',
				timetable: "17:30",
				teacher: "Edu Bib ", 
				duration: "0:45", 
				active: false,
				data : {
					day: 19, 
					month : "August"
				}, 
				complete: 0
			}, 
			{
				id: 21,  
				level: '3', 
				title : "SAP Advanced",
				timetable: "17:30",
				teacher: "Katarina Bo", 
				duration: "02:30", 
				active: true,
				data : {
					day: 21, 
					month : "January"
				},  
				complete: 80 
			}, 
			{
				id: 22, 
				level: '3', 
				title : "Sport - Aerobic",
				timetable: "14:30",
				teacher: "Gigi Bec ", 
				duration: "01:45", 
				active: true,
				data : {
					day: 21, 
					month : "July"
				}, 
				complete: 70
			}, 
			{
				id: 23, 
				level: '2', 
				title : "Music",
				timetable: "12:30",
				teacher: "Mariah Carry", 
				duration: "20:50", 
				active: true,
				data : {
					day: 8, 
					month : "August"
				}, 
				complete: 66
			}] 
			
		}; 

		this.initialNotes = [...this.state.notes]; 
		this.update = this.update.bind(this);
		
		this.removeNode = this.removeNode.bind(this);
		this.changeColor = this.changeColor.bind(this);
		this.searched = this.searched.bind(this);
		this.resetSearch = this.resetSearch.bind(this);
		this.toggleContainer = this.toggleContainer.bind(this);
 		this.onSortBy = this.onSortBy.bind(this);
	 }
	 

	update(newText, i) { 
        const newState = {...this.state}; 
		newState.notes[i].title = newText; 
		this.setState(newState);
 	}
	

	
	removeNode(elm) {
		var newState = {...this.state}; 
		var noteRemoved = newState.notes.splice(elm, 1);
		this.setState(noteRemoved); 
	}
	
	
	changeColor(color) {
 		this.setState({
			changeColorClass: color
		});
	}
	
	 

	resetSearch() {
		this.setState({
			notes: this.initialNotes
		}); 
	}

	searched(searchTerm) {
 		const {notes} = this.state; 
		if (searchTerm !== '' || undefined) {
			const searchedNotes = notes.filter((note) => {
				let couseTitleLowercase = note.title.toLowerCase();
				let searchTermLowercase = searchTerm.toLowerCase(); 
				return  (couseTitleLowercase.indexOf(searchTermLowercase) !== -1)
			}); 

 		this.setState({
			notes:searchedNotes
		 });
		}
	}



	onSortBy(key) {
		if (key !== '') {
 			this.setState({
				coursesSortBy: key, 
				notes : this.state.notes.sort(By)
			});
			function By(a, b) {	
				var itemA = a[key];  
				var itemB = b[key]; 

				const sort = (typeof a[key] === "number") ?  numberSort  :   stringSort
				return sort (itemA, itemB)
			 }
 		} 
		else {
			this.setState({
				notes: this.initialNotes, 
				coursesSortBy: ''
			}) 
		}
	}

	toggleContainer(bool) {
		this.setState({
			isToggled: !bool
		});
	}
	

	render() { 
		const loadHome = '/Home' 
		return (
			<Router>
				<div className= {'board ' + this.state.changeColorClass} >
					<div className= "header-container">
						<Search notes={this.state.notes} onSearch={this.searched} onResetSearch={this.resetSearch}/>
						<ColorContainers colors = {this.state.colors} onClickColor = {this.changeColor}/>
						<SortBy allCourses ={this.state.notes} onHandleSort={this.onSortBy}></SortBy>  
   					</div> 
 					<AsideMenu breadcrumps={this.state.menu} colors={this.state.changeColorClass}/> 
 						 
 					<div className='activeCourseContainer'>
						<Route path='/ContactUs' component ={ContactUs} />    
						<Route path='/Trainings/:submenus' component={TrainingsTypes} />   
						<Route path='/Trainings'  render ={() =><Tiles tiles={this.state.notes} onClickRemove={this.removeNode} coursesSortBy ={this.state.coursesSortBy} onChange={this.update} />} /> 
						<Route path='/Home' render ={() =><Chart notes={this.state.notes}/>} />
					</div>

 					<AsideBar onToggleContainer={this.toggleContainer} isToggled={this.state.isToggled}/>  
 				</div>
         	</Router>
		)
	}
}

