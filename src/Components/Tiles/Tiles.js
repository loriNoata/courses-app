import React, {useState, useEffect} from 'react'; 
import  Tile from './Tile'; 
 
const tiles = (props) => props.tiles.map( (tile, index) => {
    return ( 
        <Tile key={tile.id} 
            onChange={props.onChange} 
            onClickRemove={props.onClickRemove} 
            index={index} 
            coursesSortBy ={props.coursesSortBy}
            dataComplete={tile.complete} 
            dataDay={tile.data.day}
            dataMonth={tile.data.month}					
            dataTimetable={tile.timetable} 
            dataDuration={tile.duration} 
            dataTeacher={tile.teacher} 
            dataTitle={tile.title}>
        </Tile>
   )     
 }); 
      
export default tiles; 