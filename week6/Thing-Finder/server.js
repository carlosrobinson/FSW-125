const express = require('express')
const app = express()
const { v4: uuidv4 } = require('uuid')
const morgan = require("morgan")

//Middleware
app.use(express.json())
app.use(morgan("dev"))

app.use("/itemList", require("./Routes/itemsRouter.js"))




app.listen(8000, () => {
    console.log("The server is running on Port 8000.")
})