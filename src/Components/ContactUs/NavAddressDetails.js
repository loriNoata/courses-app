import React from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
 
 const NavAddressDetails = (props) => {
 
 
  const navElems = props.details.map( (elem, index) => {
    return(
      <div className="level-item has-text-centered" key={index}>
          <div>
            <p className="title">  <FontAwesomeIcon icon={elem.icon} />  </p>
            <p > { elem.details} </p>
          </div>
      </div>
    )
  });
 
   return(
      <nav className="level box is-mobile">
        {navElems}
     </nav>
   )
 }
      


export default NavAddressDetails; 