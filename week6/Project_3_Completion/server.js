const express = require("express")
const app = express()
const morgan = require('morgan')


//Middleware (for every request) //
app.use(express.json()) // Look for a request body, and turn it into 'req.body'.
app.use(morgan('dev'))


//Routes
app.use("/bountyHunters", require('./Routes/hunterRouter.js'))

//Error Handler
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

//Server Listen
app.listen(9000, ()=>  {
    console.log('This  server is running on Port 9000')
})