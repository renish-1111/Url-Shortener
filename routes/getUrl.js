const express = require('express')
const {handleRedirect, handleHome,handleGenarateNewShortUrl} = require('../controllers/url')


const router = express.Router()



router.get('/',handleHome)
router.post('/',handleGenarateNewShortUrl)


router.get('/:shortId',handleRedirect)

module.exports = router
