import React, {useState} from "react"
import AddStudentForm from "./AddStudentForm.js" 


export default function Students(props) {
    const {firstName, lastName, age, active,   _id} = props
    const [editToggle, setEditToggle] = useState(false)

    return (
        <div key={_id} className= "student-cnter">
            { !editToggle ?
            <>

            <h1>Name: {firstName + " " + lastName}</h1>
            <h3>Age: {age}</h3>
            <h3 >Enrolled: {active === false ? "No" :   "Yes"}</h3>


 
            <button className="delete-btn"
            onClick= {() =>props.deleteStudent(_id)}>Delete
            </button >
            <button 
            className="edit-btn"
            onClick= {() => setEditToggle(prevToggle => !prevToggle)}
            >
                Edit
            </button>
            </>
            :  
            <>
            <AddStudentForm
                id = "submit"
                firstName={firstName}
                lastName= {lastName}
                age= {age}
                active= {active}
                _id={_id}
                btnTxt= "Submit Edit"
                submit={props.editStudent}
            />

            <button
            onClick= {() => setEditToggle(prevToggle => !prevToggle)}
            >Close</button>
            </> 
            }
                    </div>

        
    )
}
