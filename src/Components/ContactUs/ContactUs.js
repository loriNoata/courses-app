import React,  { Component }   from 'react'; 
import './contactUs.scss'; 
import NavAddressDetails from './NavAddressDetails'; 
import Gmap from './Gmap'; 
import Input from './../../UI/Input'; 



class ContactUs extends Component {
	constructor(props) {
		super(props); 
		this.state = {
			isVisible: false, 
			userInputs: {
                firstName: {
                    elemType: "input", 
                    elemConfig: {
                        placeholder: "First Name", 
                        type: "text",
                    },
                    value: ""
                }, 
			    lastName: {
                    elemType: "input", 
                    elemConfig: {
                        placeholder: "Last Name", 
                        type: "text",
                    },
                    value: ""
                }, 
                emailAddress: {
                     elemType: "input", 
                    elemConfig: {
                        placeholder: "Email Address", 
                        type: "emai",
                    },
                    value: ""
                },  
                phoneNumber : {
                    elemType: "input", 
                    elemConfig: {
                        placeholder: "Phone Number", 
                        type: "number",
                    },
                    value: ""
                },  
                message: {
                    elemType: "textarea", 
                    elemConfig: {
                        placeholder: "Add your comments here ..", 
                        type: "text",
                    },
                    value: ""
                }
            },
            company: [{details: 'support@gSupport.com', icon: 'envelope'},  
                      {details: '07345 345 345', icon: 'phone-alt'},   
                      {details: 'Romania, Bucharest, 4366 345',  icon: 'map-marker-alt'}
            ]
            }

            this.onHandleInputChange = this.onHandleInputChange.bind(this);
            this.onHandleSubmit = this.onHandleSubmit.bind(this);
            this.displayInputElems = this.displayInputElems.bind(this);

		}; 

        onHandleInputChange(valueInput, valueKey) {
            const updatedUserInputs ={...this.state.userInputs}; // 
            const updatedUserInputsElem = {...updatedUserInputs[valueKey]}; 

            updatedUserInputsElem.value  = valueInput; 
            updatedUserInputs[valueKey] = updatedUserInputsElem; 

            this.setState({
                userInputs: updatedUserInputs
            });
        }

        onHandleSubmit(event) {
           const detailsInput =  this.state.userInputs; 
           console.log(detailsInput);
            event.preventDefault(); 
            console.log("submit");
        }
  
 
        displayInputElems() {
            const formElementsArray = [];
            for (let key in this.state.userInputs) {
                formElementsArray.push({
                    id: key,
                    config: this.state.userInputs[key]
                });
            }

            const formSubmit = (
                <form onSubmit={this.onHandleSubmit}>
                    { formElementsArray.map( (arr) => {
                        const {elemType, value, elemConfig} = arr.config; 
                        const  elemId  = arr.id; 
                    
                        return (
                            <Input 
                                key={elemId} 
                                inputtype={elemType}  
                                inputvalue={value} 
                                inputConfig={elemConfig} 
                                onHandleChange={(event) =>this.onHandleInputChange(event,elemId)}
                            />
                        )
                         
                    })}
                    <button> Success </button>
                </form>
            );
            
                
           
            return formSubmit; 

        }

    render() {
        return (
            <div className="contact-us-container">
                <NavAddressDetails details={this.state.company}/>
                
                <div className="tile is-ancestor">
                    <Gmap />
                    <div className="tile is-parent">
                        <div className="tile is-child box">
                            <p className="title">Contact us</p>

                                {this.displayInputElems(this.state.userInputs)}

                             <br /> <br /> <br /> <br /> 
                          
                        </div>
                    </div>
                 </div>
     
     
             </div>
         )
    }
}

export default ContactUs; 
   

  