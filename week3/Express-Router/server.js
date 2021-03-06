const express = require("express")
const app = express()


//Middleware (for every request) //
app.use(express.json()) // Look for a request body, and turn it into 'req.body'.



//Routes
app.use("/bountyHunters", require('./Routes/hunterRouter.js'))

//Server Listen
app.listen(9000, ()=>  {
    console.log('This  server is running on Port 9000')
})