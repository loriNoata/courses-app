import React from 'react';

const input = (props) => { 
    let inputElem = null; 
  

    const onHandleInputChange = (event) =>{
         //console.log("inputConfig from input.js", configs);
         props.onHandleChange(event.target.value ); 
    }

    switch (props.inputtype) {
        case 'input' : {
             inputElem = <input className={props.inputtype}  { ...props.inputConfig} onChange={ onHandleInputChange} /> 
            break;
        }
        case 'textarea' : {
            inputElem = <textarea className={props.inputtype} { ...props.inputConfig} ></textarea>
            break; 
        }
        default : inputElem = <input className={props.inputtype}   { ...props.inputConfig} onChange={ onHandleInputChange}/>  
    }
    

    return(
        <div className="customInput"> 
            {inputElem}
        </div>
    )
};


export default input; 