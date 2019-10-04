import React  from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './AsideMenu.scss'; 
import { NavLink } from "react-router-dom";

const menu = (props) => props.menu.map( (breadcrum, index) => {
    if ( typeof breadcrum  === 'object') {
    const  breadcrumsObjValue = Object.values(breadcrum); 

    const displaySbm = (submenu, mainLink) => {
        if (submenu && submenu instanceof Array ) { 
            const navLinkSubmenu=  submenu.map((sbm, index) => {
                return (
                    <NavLink to={submenu} activeClassName="active" to={`/${mainLink}/${sbm}`} key={index + 10} >  
                        <p className='sbm'>{sbm} </p>
                    </NavLink>
                )
            }) 
            return navLinkSubmenu  
        }
    }

 

    const navLinkBreadcrum = breadcrum.menu.replace(/ +/g, "");
        return (  
            breadcrumsObjValue.map((elm, index) => {
                if (index == '0' ) {
                    return (
                        <div className='menu' key={index + 10} >
                            <NavLink to={breadcrum.menu} activeClassName="active" to={`/${navLinkBreadcrum}`} >                                    <div className='menuIcon'><FontAwesomeIcon icon={breadcrum.icon}/> </div>
                                <div className='menuTitle' > {breadcrum.menu}  
                                </div>  
                            </NavLink>

                            { breadcrum.submenu  &&  breadcrum.submenu instanceof Array 
                                     ?  <div className='submenu'> {displaySbm(breadcrum.submenu, navLinkBreadcrum)}</div>
                                     :  ''
                            }


                                
                

                        </div>  
                    )
                }  
            })
        )      
    }          
})


export default menu; 
 