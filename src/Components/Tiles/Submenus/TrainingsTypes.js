import React, {useEffect, useState} from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import axios from '../axios-orders';

 const TrainingsTypes = ({match}) => {
 
  const  [data, setData] = useState({});

    useEffect(() => {
      fetch('https://randomuser.me/api/?results=20')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setData(data)
        return data; 
      } );      
    }, []);
    // , 


    return(
      <div className="level box is-mobile" >
         { match.params.submenus  ==='Active' 
            ?  ActiveTrainings(data)
            : (match.params.submenus  ==='Complete'
                ? CompleteTrainings()
                : TestsTrainings()
            )
          }
     </div>
   )
 }
   
 
const ActiveTrainings = (data) => {
 console.log("active tr", data.results);

//const users =  data.results.map(result => console.log(result) )

  return (
    <div className="level box is-mobile" >
          ActiveTraiongs box  - 

    </div>
  )
}

const CompleteTrainings = () => {
  return (
    <div className="level box is-mobile" >
          CompletTraiongs box  
    </div>
  )
}

const TestsTrainings = () => {
  return (
    <div className="level box is-mobile" >
          TestsTrainings box  
    </div>
  )
}

export {ActiveTrainings, CompleteTrainings, TestsTrainings} ; 
export default TrainingsTypes; 