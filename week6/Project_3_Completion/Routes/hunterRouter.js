const express = require('express')
const hunterRouter = express.Router()
const { v4: uuidv4 } = require('uuid');

const bountyHunters = [
    {
        firstName:"Luke ",
        lastName: "Skywalker",
        alive: true,
        bounty: 5000,
        type: "Jedi",
        _id: uuidv4()
    },
    {
        firstName:"Darth ",
        lastName: "Vader",
        alive: false,
        bounty: 100000,
        type: "Sith",
        _id: uuidv4()
    },
    {
        firstName:"Darth",
        lastName: "Maul",
        alive: true,
        bounty: 500,
        type: "Sith",
        _id: uuidv4()
    },
    {
        firstName:"Obi-Wan",
        lastName: "Kenobi ",
        alive: false,
        bounty: 00,
        type: "Jedi",
        _id: uuidv4()
    }
]

//Get One
hunterRouter.get("/:bountyHunterId", (req, res, next) =>{
    const bountyHunterId = req.params.bountyHunterId
    const foudHunter = bountyHunters.find(hunter => hunter._id===bountyHunterId)
    if(!foudHunter){
        const error = new Error(`The item with id ${bountyHunterId} was not found.`)
        return next(error)
    }
    res.status(200).send(foudHunter)
})


//Get by Type
hunterRouter.get("/search/type", (req, res, next) =>{
    const type = req.query.type
    if(!type){
        const error = new Error(`You must provide a type.`)
        return next(error)
    }
    const filteredHunters = bountyHunters.filter(hunter => hunter.type === type)
    res.status(200).send(filteredHunters)
})

//Delete One
hunterRouter.delete("/:bountyHunterId", (req, res) =>{
    const bountyHunterId = req.params.bountyHunterId
    const hunterIndex = bountyHunters.findIndex(hunter => hunter._id === bountyHunterId)
    bountyHunters.splice(hunterIndex, 1)
    res.send("Successfully deleted hunter!")
})

//Update One
hunterRouter.put("/:bountyHunterId", (req, res) => {
    const bountyHunterId = req.params.bountyHunterId
    const hunterIndex = bountyHunters.findIndex(hunter => hunter._id === bountyHunterId)
    const updatedHunter = Object.assign(bountyHunters[hunterIndex], req.body)
    res.send(updatedHunter)
})



// Get All====Routes
// hunterRouter.get("/", (req, res) =>{
//     res.send(bountyHunters)
// })

//Post One===
// hunterRouter.post("/", (req, res) => {
//     const newBountyHunter = req.body
//     newBountyHunter._id = uuidv4()
//     bountyHunters.push(newBountyHunter)
//     res.send(`Succesfully added ${newBountyHunter.firstName} to the database.`)
// })


//Get All====
hunterRouter.route("/")
.get( (req, res) =>{
    res.status(200)
    res.send(bountyHunters)
})

//Post One====
.post( (req, res) => {
    const newBountyHunter = req.body
    newBountyHunter._id = uuidv4()
    bountyHunters.push(newBountyHunter)
    res.status(201).send(newBountyHunter)
})








module.exports = hunterRouter