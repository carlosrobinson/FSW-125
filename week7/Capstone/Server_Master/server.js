const express = require("express")
const app = express()
const morgan = require("morgan")

//Middleware
app.use(express.json())
app.use(morgan("dev"))

    
//Routes
app.use("/data", require("./routes/studentRouter.js"))


//Error handling
app.use((err,req, res, next) => {
console.log(err)
return res.send({errMsg: err.message})
})



app.listen(9000, () => {
    console.log("This server is running on Port 9000")
})