const express = require('express')
const { connectMongoDB } = require('./connection')
const cookieParser = require('cookie-parser')
const { restricToUser } = require('./middlewares/auth')


connectMongoDB("mongodb://localhost:27017/urlShorter")
    .then(() => { console.log("MongoDB is connected") })
    .catch((err) => { console.log("Error to connect with MongoDB:", err) })

const app = express()
const port = 8000

const getUrlRouter = require('./routes/getUrl')
const userRouter = require('./routes/user')


app.set('view engine', 'ejs');

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.use('/url', restricToUser ,getUrlRouter)
app.use('/user', userRouter)

app.listen(port,console.log(`Example app listening on port ${port}!\nhttp://localhost:8000/`))
