import React from 'react'; 

 
const Gmap = (props) => {
  
 
   return(
    <div className="tile  is-4 is-vertical is-parent">
        <div className="tile is-child box">
          <div id="myMap">
              <div style={{textAlign:"center", height:"595px", width:"292px"}}>
                  <div style={{overflow:"hidden", background:"none!important", height:"auto", width:"292px"}}>
                    <iframe width="365" height="595" id="gmap_canvas" 
                          src="https://maps.google.com/maps?q={{Romania.Bucharest}}&t=&z=13&ie=UTF8&iwloc=&output=embed" 
                          frameBorder="0" 
                          scrolling="no" 
                          marginHeight="0" 
                          marginWidth="0">
                    </iframe>
                  </div>
              </div>
          </div> 
      </div>
    </div>
   )
}
      


export default Gmap; 