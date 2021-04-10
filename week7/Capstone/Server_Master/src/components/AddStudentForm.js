import React, {useState} from "react"
export default function AddStudentForm(props) {

    const initInputs = 
    {
        active: props.active || "", 
        firstName: props.firstName || "", 
        lastName: props.lastName || "", 
        age: props.age || "", 
        courses: props.courses || []
    

    }

    
    const [inputs, setInputs] = useState(initInputs)
    


        function handleChange(e) {
        const {name, value} = e.target
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
        
    }

    function handleSubmit(e) {
        e.preventDefault()
         props.submit(inputs, props._id)
         console.log(inputs)
        setInputs(initInputs)
    }
    
    function handleEnrolled(e) { 
        const x = e.target.value
        switch(x) { 
            case "true":
                return setInputs(prevInputs=>({...prevInputs,active: true}))
            
            case "false": 
                 return setInputs(prevInputs=>({...prevInputs,active: false}))
                
            default:
                    setInputs(initInputs)
            }
        }



    return (
        <form id= "student-form" onSubmit={handleSubmit} >
            <input 
            type="text" 
            name="firstName" 
            value= {inputs.firstName} 
            onChange={handleChange}
            
            />
            <input 
            type="text" 
            name="lastName" 
            value= {inputs.lastName} 
            onChange={handleChange}
            />
            <input 
            name="age" 
            type="number" 
            value= {inputs.age } 
            onChange={handleChange}
            /> 
            <select name="active" value= {inputs.active} onChange={handleEnrolled}>
            <option defaultValue= ""></option>
                <option defaultValue= "">true</option>
                <option defaultValue="" >false</option>

            </select>

            <button className= "btn-form">{props.btnTxt}</button>
        </form>
    ) 
} 