const User = require('../models/user')
const { v4: uuidv4 } = require('uuid');
const { setUser } = require('../service/auth')

async function handleUserSignUp(req, res) {

    const { name, email, password } = req.body

    await User.create({
        name,
        email,
        password
    })

    return res.render('home', { 'message': 'User created successfully' })
}

async function handleUserLogin(req, res) {

    const { email, password } = req.body
    const user = await User.findOne({ email })

    if (!user) {
        return res.render('login', { 'message': 'User not found' })
    }
    if (user.password !== password) {
        return res.render('login', { 'message': 'Incorrect password' })
    }
    const sessionId = uuidv4();

    setUser(sessionId, user)

    res.cookie('uid', sessionId)
    // res.render('home', { 'message': 'User logged in successfully' })
    res.redirect('/url')
}

module.exports = {
    handleUserSignUp, handleUserLogin
}
