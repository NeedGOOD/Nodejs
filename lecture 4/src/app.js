const express = require("express")
const mongoose = require("mongoose")
const userRouter = require("./routers/user")

require("dotenv").config()

const PORT = process.env.PORT
const URL = process.env.MONGO_URL

const app = express()
app.use(express.json()) //body-parser
app.use("/users", userRouter)


mongoose.connect(URL).then(() => {
    app.listen(PORT, () => {
        console.log(`Server is listening on ${PORT}`)
    })
}).catch((error) => {
    console.log(error.message)
});

