const express = require('express')
const getUrlRouter = require('./routes/getUrl')
const { connectMongoDB } = require('./connection')

connectMongoDB("mongodb://localhost:27017/urlShorter")
    .then(() => { console.log("MongoDB is connected") })
    .catch((err) => { console.log("Error to connect with MongoDB:", err) })

const app = express()
const port = 8000

app.set('view engine', 'ejs');

app.use(express.json())

app.use(express.urlencoded({ extended: false }))

app.use('/', getUrlRouter)

app.listen(port, async () => {
    setTimeout(() => {
        console.log(`Example app listening on port ${port}!\nhttp://localhost:8000/`)
    }, 1000)
})
