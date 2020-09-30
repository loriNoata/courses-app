import React, {useEffect, useState} from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import axios from '../axios-orders';

 const TrainingsTypes = ({match}) => {
 
  const  [data, setData] = useState({});

    useEffect(() => {
      fetch('https://randomuser.me/api/?results=20')
      .then(response => response.json())
      .then(data => {
        setData(data)
        return data; 
      } );      
    }, []);
    // , 
   
    return(
      <div> 
         { match.params.submenus  ==='Active' 
            ?  ActiveTrainings(data)
            : (match.params.submenus  ==='Complete'
                ? CompleteTrainings(data)
                : TestsTrainings(data)
            )
          }
     </div>
   )
 }
   
 
const ActiveTrainings = (data) => {
const users = (data.results) ?  data.results : console.log("empty data")
console.log("::::", users);

  return (
    <React.Fragment>
      <h1 > Active Training page </h1>
      <div className="level box is-mobile subMenu"> 
        {users && users.map(user =>(
          <div key={user.location.street.number}> 
            <h2>{user.name.title}  {user.name.first} {user.name.last}  |</h2>
          </div>
        ))}
      </div>
    </React.Fragment>
  )
}

const CompleteTrainings = (data) => {
  const users = (data.results) ?  data.results : console.log("empty data")
  return (
    <React.Fragment>
      <h1 > Complete Training page </h1>
      <div className="level box is-mobile subMenu"> 
        {users && users.map(user =>(
          <div key={user.location.street.number}> 
            <h2>{user.name.title}  {user.name.first} {user.name.last}  |</h2>
          </div>
        ))}
      </div>
    </React.Fragment>
  )
}

const TestsTrainings = (data) => {
  const users = (data.results) ?  data.results : console.log("empty data")
 
  return (
    <React.Fragment>
    <h1 > Tests Training page </h1>
    <div className="level box is-mobile subMenu"> 
      {users && users.map(user =>(
        <div key={user.location.street.number}> 
          <h2>   {user.name.first} {user.name.last}  |</h2>
        </div>
      ))}
    </div>
  </React.Fragment>
  )
}

export {ActiveTrainings, CompleteTrainings, TestsTrainings} ; 
export default TrainingsTypes; 