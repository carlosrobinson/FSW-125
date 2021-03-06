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

// Routes
// hunterRouter.get("/", (req, res) =>{
//     res.send(bountyHunters)
// })


// hunterRouter.post("/", (req, res) => {
//     const newBountyHunter = req.body
//     newBountyHunter._id = uuidv4()
//     bountyHunters.push(newBountyHunter)
//     res.send(`Succesfully added ${newBountyHunter.firstName} to the database.`)
// })

hunterRouter.route("/")
.get( (req, res) =>{
    res.send(bountyHunters)
})
.post( (req, res) => {
    const newBountyHunter = req.body
    newBountyHunter._id = uuidv4()
    bountyHunters.push(newBountyHunter)
    res.send(`Succesfully added ${newBountyHunter.firstName} to the database.`)
})








module.exports= hunterRouter