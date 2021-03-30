const express = require('express')
const itemsRouter = express.Router()
const { v4: uuidv4 } = require('uuid');

const itemList =
[ 
    {
    name: "bannana",
    type: "fruit",
    price: 300,
    _id: uuidv4()
    },
    {
        name: "jacket",
        type: "clothing",
        price: 600,
        _id: uuidv4()
        
    },
    {
        name: "apple",
        type: "fruit",
        price: 150,
        _id: uuidv4()
    },
    {
        name: "Shirt",
        type: "clothing",
        price: 500,
        _id: uuidv4()
        
    },
    {
        name: "New Balance",
        type: "shoes",
        price: 350,
        _id: uuidv4()
    },
    {
        name: "chair",
        type: "furniture",
        price: 450,
        _id: uuidv4()
    },
    {
        name: "pear",
        type: "fruit",
        price: 250,
        _id: uuidv4()
    },
    {
        name: "Nike Air Jordans",
        type: "shoes",
        price: 600,
        _id: uuidv4()
    }
]


//Get all
itemsRouter.get('/', (req, res) => {
    res.send(itemList)
})

//Get One
itemsRouter.get('/:itemId', (req, res) => {
    const itemId = req.params.itemId
    const foundItem = itemList.find(item => item._id === itemId)
    res.send(foundItem)
})

//Get by Type
itemsRouter.get("/search/type", (req, res) => {
    const type = req.query.type
    const filteredItems = itemList.filter(item => item.type === type)
    res.send(filteredItems)
})

//Get
itemsRouter.get("/search/name", (req, res) => {
    const name = req.query.name
    const filteredItems = itemList.filter(item => item.name === name)
    res.send(filteredItems)
})


module.exports = itemsRouter