const express = require('express')
const { handleUserSignUp,handleUserLogin } = require('../controllers/user')

const router = express.Router()

router.get('/signup', (req, res) => {
    res.render('signup')
})
router.post('/signup', handleUserSignUp)

router.get('/login', (req, res) => {
    res.render('login')
})
router.post('/login', handleUserLogin)

module.exports = router