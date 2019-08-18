import React, {Component} from 'react'; 
import Tile from './Tile';
import AddNewWishCourses  from './AddNewWishCourses';
import Search from './Search';
import ColorContainers from './BkgColors'; 
import SortBy from './SortBy'; 

import './Tile.css'; 
import WishListContainer from './WishListContainer'; 

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckSquare, faClock, faPlusCircle, faCalendarDay } from '@fortawesome/free-solid-svg-icons'
library.add(faCheckSquare, faClock, faPlusCircle, faCalendarDay); 

function stringSort(a, b) {

	if (a < b) {
		return -1;
	}
	if (a > b) {
		return 1;
	}
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
			selectedNotes : [], 
			isToggled : true, 
			coursesSortBy: '', 
			notes : [{
				id: 10, 
				title : "English ",
				level: '1', 
				timetable: "10:00",
				teacher: "Oana Pelea", 
				duration: "2h:00min", 
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
				teacher: "Tea Cher ", 
				duration: "2h:30min", 
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
				teacher: "Mib Haela", 
				duration: "2h:30min", 
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
				teacher: "Spor Sport", 
				duration: "1h:30min", 
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
				teacher: "Bazede Date", 
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
				teacher: "Edu Bibb", 
				duration: "0h:30min", 
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
				title : "SAP Basics",
				timetable: "17:30",
				teacher: "Mib Haela", 
				duration: "2h:30min", 
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
				title : "Sport",
				timetable: "14:30",
				teacher: "Spo Sport", 
				duration: "1h:30min", 
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
				teacher: "Bazede Date", 
				duration: "2h:30min", 
				active: true,
				data : {
					day: 21, 
					month : "August"
				}, 
				complete: 66
			}, ], 
			wishTrainings: [],
			colors: [ 'red', 'yellow', 'blue', 'grey' ]
		}; 

		this.initialNotes = [...this.state.notes]; 
		this.displayNotes = this.displayNotes.bind(this);
		this.update = this.update.bind(this);
		this.addNewNote = this.addNewNote.bind(this);
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
	
	addNewNote(val) {
		const { wishTrainings } = this.state;  
		let updatedTrainings = [...wishTrainings, val];

	   	// if (this.state.isToggled) {
		// 	this.toggleContainer(this.state.isToggled)
	   	// }
 		
		this.setState({
			...this.state, 
			wishTrainings : updatedTrainings
		});

 		return wishTrainings
  	} 
	
	removeNode(elm) {
		var newState = {...this.state}; 
		var noteRemoved = newState.notes.splice(elm, 1);
		this.setState(noteRemoved); 
	}
	
	displayNotes(note, i) {
		return (
			<Tile key={note.id} 
				onChange={this.update} 
				onClickRemove={this.removeNode} 
				index={i} 
				coursesSortBy ={this.state.coursesSortBy}
				dataComplete={note.complete} 
				dataDay={note.data.day}
				dataMonth={note.data.month}					
				dataTimetable={note.timetable} 
				dataDuration={note.duration} 
				dataTeacher={note.teacher} 
				dataTitle={note.title}>
			</Tile>
		);
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
			 console.log(this.state.notes);
		} 
		else {
			this.setState({
				notes: this.initialNotes, 
				coursesSortBy: ''
			}) 
		}
		
	}

	toggleContainer(bool) {
		console.log("schimbal la ", !bool);
		this.setState({
			isToggled: !bool
		});
	}
	

	render() { 
		console.log('Bord props: ', this.state.isToggled);
 		return (
			<div className= {'board ' + this.state.changeColorClass} >
				 <div className= "header-container">
					<Search notes={this.state.notes} onSearch={this.searched} onResetSearch={this.resetSearch}/>
					<ColorContainers colors = {this.state.colors} onClickColor = {this.changeColor}/>
					<SortBy allCourses ={this.state.notes} onHandleSort={this.onSortBy}></SortBy>  
					<AddNewWishCourses onClickNew={this.addNewNote} onToggleContainer={this.toggleContainer} isToggled={this.state.isToggled}/> 
 				</div>  
				 

				 <div className='activeCourseContainer'>
					<h1 className='fullWidth'> Active Courses </h1>
					{ this.state.notes.map(this.displayNotes)}
				</div>
				
				 <WishListContainer wishList={this.state.wishTrainings} onToggleContainer={this.toggleContainer} isToggled={this.state.isToggled}/>  
			</div>
		)
	}
}

