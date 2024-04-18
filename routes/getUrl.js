const express = require('express')
const {handleRedirect, handleHome,handleGenarateNewShortUrl,handleData} = require('../controllers/url')


const router = express.Router()




router.get('/',handleHome)
router.post('/',handleGenarateNewShortUrl)
router.get('/data',handleData)



module.exports = router
