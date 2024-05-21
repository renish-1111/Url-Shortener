const express = require('express')
const { connectMongoDB } = require('./connection')
const cookieParser = require('cookie-parser')
const { restricToUser } = require('./middlewares/auth')

connectMongoDB(MONGO_URL)
    .then(() => { console.log("MongoDB is connected") })
    .catch((err) => { console.log("Error to connect with MongoDB:", err) })

const app = express()
const port = PORT || 8000

const getUrlRouter = require('./routes/getUrl')
const userRouter = require('./routes/user')
const staticRouter = require('./routes/staticRouter')


app.set('view engine', 'ejs');

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.use('/url', restricToUser ,getUrlRouter)
app.use('/user', userRouter)
app.use('/', staticRouter)

app.listen(port,console.log(`Example app listening on port ${port}!`))
