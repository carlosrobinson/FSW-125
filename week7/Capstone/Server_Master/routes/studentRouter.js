const express = require("express")
const studentRouter = express.Router()
const { v4: uuidv4 } = require('uuid')

//Students
const data = 
[
    {
    firstName: "Susy",
    lastName: "Smith",
    age: 19,
    active: true,
    _id: uuidv4(),
    courses: 
        [
            
                 "English Lit",
                 "Civics ",
                 "Psychology  101",
                 "Math"
            
        ]
    },
    {
        firstName: "John",
        lastName: "Thompson",
        age: 20,
        active: true,
        _id: uuidv4(),
        courses: 
            [
                
                     "Science" ,
                     "Math",
                     "Computer Engineering",
                     "Advanced Mathmatics"
                
            ]
    },
    {
        firstName: "Peter",
        lastName: "Parker",
        age: 18,
        active: false,
        _id: uuidv4(),
        courses: 
            [
                
                     "Science",
                     "Civics ",
                     "Computer Engineering",
                     "Advanced Mathmatics",
                     "Quantum Psychics"
                
            ]
    }
]


//Get All
studentRouter.get("/", (req, res) => {
    res.status(200)
    res.send(data)
})


//Get one
studentRouter.get("/:dataId", (req, res, next) => {
   const dataId = req.params.dataId
   const foundData = data.find(student => student._id === dataId)
   if(!foundData){
       const error = new Error(`The Student with id: ${dataId}  was not found.`)
       res.status(500)
     return  next(error)
   }

   res.status(200).send(foundData)
})


//Get by name
studentRouter.get("/search/firstName", (req, res, next) => {
    const firstName = req.query.firstName
    if(!firstName) {
        const error = new Error("You must provide a name.")
        res.status(500)
        return next(error)
    }
    const filteredNames = data.find(student => student.firstName === firstName)
    res.status(200).send(filteredNames)
})


//Delete one
studentRouter.delete("/:studentId", (req, res) => {
    const studentId = req.params.studentId
    const studentIndex = data.findIndex(student => student._id === studentId)
    data.splice(studentIndex, 1)
    res.send("Succcessfully deleted student!")
})


//Update one
studentRouter.put("/:studentId", (req, res) => {
    const studentId = req.params.studentId
    const studentIndex = data.findIndex(student => student._id === studentId)
    const newStudent = Object.assign(data[studentIndex], req.body)
    res.status(201).status(201).send(newStudent)
    //res.send("Succcessfully updated student!")
})
 

//Post one
studentRouter.post("/", (req, res) => {
    const newData = req.body
    newData._id = uuidv4()
data.push(newData)
res.status(201).send(newData)
})




module.exports = studentRouter