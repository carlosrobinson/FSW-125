import React, {useState} from "react"

export default function AddHunterForm (props) {
    const initInputs = {
        firstName: props.firstName || "",
        lastName: props.lastName || "", 
        alive: props.alive || "",
        bounty: props.bounty || "",
        type: props.type || ""
    }
    const [inputs, setInputs] = useState(initInputs)

    function handleChange(e) {
        const {name, value} = e.target
        setInputs(prevInputs =>({...prevInputs, [name]: value}))
    }

    function handleSubmit(e) {
        e.preventDefault()
        props.submit(inputs, props._id)
        setInputs(initInputs)
        
    }


        
 function handleAlive(e) {
    const x = e.target.value

    switch(x) { 
        case "true":
            return setInputs(prevInputs=>({...prevInputs,alive: true}))
        
        case "false": 
             return setInputs(prevInputs=>({...prevInputs,alive: false}))
            
        default:
                setInputs(initInputs)
        }
 } 

    return (
        <form onSubmit= {handleSubmit} id= "hunter">
            <input type= "text" name= "firstName" value= {inputs.firstName} onChange= {handleChange}></input>
            <input type= "text" name= "lastName" value= {inputs.lastName} onChange= {handleChange}></input>
            <input name= "alive" type= "text" value={inputs.alive} onChange={handleAlive}></input>
            <input type= "number" name= "bounty" value= {inputs.bounty} onChange ={handleChange}></input>
            <input type= "text" name= "type" value= {inputs.type} onChange= {handleChange} ></input>
            <button id= "form-button">{props.btnText}</button>
        </form> 
    )
}