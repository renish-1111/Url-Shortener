const express = require('express')
const {handleOpenLogin} = require('../controllers/static')
const {handleRedirect} = require('../controllers/url')

const router = express.Router()

router.get('/',handleOpenLogin)

router.get('/:shortId',handleRedirect)

module.exports = router