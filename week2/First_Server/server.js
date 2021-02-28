const express = require("express")
const app = express()

//Fake Data Users
const users = [
    {name:"carlos", age: 45},
    {name: "Sarah", age: 25},
    {name: "Mike", ager: 35},
    {name: "Cristy", age: 19}
]

app.get("/userdata", (req,res) => {
    res.send(users)
})
//Fake Data Cars
const cars = [
    {vehichle:"chevy", type: "Tahoe"},
    {vehichle: "Toyota", type: "Camry"},
    {vehichle: "Honda", type: "Accord"},
    {vehichle: "Ford", type: "Mustang"}
]

app.get("/cars", (req,res) => {
    res.send(cars)
})

const entertainment = [
    {movies:"Spiderman", genre: "Action"},
    {movies: "Family Guy", genre: "Cartoon"},
    {movies: "Meet the Browns", genre: "Comedy"},
    {movies: "Why Did I Get Married", genre: "Drama"}
]

app.get("/movies", (req,res) => {
    res.send(entertainment)
})



    
app.listen(9000, () => {
    console.log("This server is running on port 9000")
})