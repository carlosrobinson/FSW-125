import React, {useState, useEffect} from "react"
import axios from "axios"
import Hunter from "./components/Hunter"
import AddHunterForm from "./components/AddHunterForm.js"

export default function App() {
  const [hunters, setHunters] = useState([])

function getHunters() {
  axios.get("/bountyHunters")
  .then(res => setHunters(res.data))
  .catch(err => console.log(err))
}

function addHunter(newBountyHunter) {
  axios.post("/bountyHunters", newBountyHunter)
    .then(res => {
      setHunters(prevHunters => [...prevHunters, res.data])
    })
    .catch(err => console.log(err))
}

function deleteHunter(bountyHunterId) {
  axios.delete(`/bountyHunters/${bountyHunterId}`)
    .then(res => {
      setHunters(prevHunters => prevHunters.filter(hunter => hunter._id !== bountyHunterId))
})
.catch(err => console.log(err))
}

function editHunter(update, bountyHunterId) {
  axios.put(`/bountyHunters/${bountyHunterId}`, update)
    .then(res => {
      setHunters(prevHunters =>prevHunters.map(hunter => hunter._id !== bountyHunterId ? hunter : res.data) )
    })
    .catch(err => console.log(err))
}

  useEffect(() =>{
    getHunters()
    
  }, []) 
  return (
    <div>
      <h1 className ="header">
        The Original Bounty Hunter
      </h1> 
      <AddHunterForm
        submit= {addHunter}
        btnText= "Add Hunter"
      />
      {hunters.map(hunter => 
        <Hunter 
        {...hunter} 
        key = {hunter._id} 
        deleteHunter= {deleteHunter}
        editHunter= {editHunter}
        /> ) }
    </div>
  
  )
}