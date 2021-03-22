import React, { useState } from "react"
import AddHunterForm from "./AddHunterForm.js"

function Hunter(props) {
    const {firstName, lastName, bounty,alive, type, _id} = props
    const [editToggle, setEditToggle] = useState(false)
  return (
    <div className= "hunter-container">
    {  !editToggle ?
            <>
                <h1>Name: {firstName}  {lastName} </h1>
                <h3>{bounty}</h3>
                <h3>{alive}</h3>
                <h3>{type}</h3>
                <button 
                    className= "delete"
                    onClick= {() => props.deleteHunter(_id)}>
                    Delete
                </button>
                <button
                    className= "edit-btn"
                    onClick= {() => setEditToggle(prevToggle => !prevToggle)}
                >
                    Edit
                </button>
            </>
            :
            <>
                <AddHunterForm 
                    id= "submit"
                    firstName= {firstName}
                    lastName= {lastName}
                    bounty= {bounty}
                    alive= {alive}
                    type= {type}
                    _id= {_id}
                    btnText= "Submit Edit"
                    submit= {props.editHunter}
                />
                <button
                    onClick= {() => setEditToggle(prevToggle => !prevToggle)}
                    >
                    Close
                </button>
            </>
    }
    </div> 
  );
  
}

 export default Hunter