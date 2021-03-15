const express = require('express')
const todoRouter = express.Router()
const { v4: uuidv4 } = require('uuid');

const todoList = [
    {
        "name": "wash the car",
        "description": "2020 Chevy Cruze",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/2017_Chevrolet_Cruze_LT_front_5.26.18.jpg/280px-2017_Chevrolet_Cruze_LT_front_5.26.18.jpg",
        "completed": false,
        _id: uuidv4()
        },
        {
        "name": "Bake sale",
        "description": "Bake 100 cupcakes ",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/2017_Chevrolet_Cruze_LT_front_5.26.18.jpg/280px-2017_Chevrolet_Cruze_LT_front_5.26.18.data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw%3D%3D",
        "completed": true,
        _id: uuidv4()
        },
        {
        "name": "Do school work",
        "description": "FSW-125 ",
        "imageUrl": "https://miro.medium.com/max/365/1*Jr3NFSKTfQWRUyjblBSKeg.png",
        "completed": false,
        _id: uuidv4()
        },
        {
        "name": "Book flight",
        "description": "Chicago ",
        "imageUrl": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/33/fd/79/caption.jpg?w=1000&h=-1&s=1",
        "completed": false,
        _id: uuidv4()
        }
]

//Get todo by ID
todoRouter.get("/:todoId", (req, res) =>{
    const todoId = req.params.todoId
    const foundTodo = todoList.find(todo=> todo._id === todoId)
    // const updatedTodo = Object.assign(todoList[todoIndex], req.body)
    res.send(foundTodo)
})


//Update todo's
todoRouter.put("/:todoId", (req, res) =>{
   const todoId = req.params.todoId
   const todoIndex = todoList.findIndex(todo => todo._id === todoId)
   const updatedTodo = Object.assign(todoList[todoIndex], req.body)
   res.send(updatedTodo) 
})


//Remove todo's
todoRouter.delete("/:todoId", (req, res) =>{
    const todoId = req.params.todoId
    const todoIndex = todoList.findIndex(todo => todo._id === todoId)
    todoList.splice(todoIndex, 1)
    res.send("Successfully deleted todo!")
})

//Get all todo's
todoRouter.get("/",(req, res) =>{
    res.send(todoList)
})
//Add one todo
todoRouter.post("/",(req, res) =>{
    const newTodo = req.body
    newTodo._id = uuidv4()
    todoList.push(newTodo)
    res.send(`Successfully added ${newTodo.name} to the database.`)
})

module.exports = todoRouter