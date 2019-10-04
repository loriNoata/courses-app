import React, { useState } from 'react'; 
import Menu from './Menu'; 
import './AsideMenu.scss'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const asideMenu = (props) => {
    const [toggleMenu, setToggleMenOn] = useState(true); 
    const menuClassTgl = (toggleMenu) ? 'asideMenuBar' : 'asideMenuBar isSmall'; 
    const iconMenuTgl = (toggleMenu) ? 'bars' : 'ellipsis-v'; 

    return(
         <div className={menuClassTgl} >
             <div className='panelTriger'  onClick={() => setToggleMenOn(!toggleMenu)}> 
                <FontAwesomeIcon icon={iconMenuTgl}  /> 
             </div>
            <Menu menu = {props.breadcrumps}/>  
        </div>
    )
} 

export default asideMenu; 