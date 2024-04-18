const shortid = require('shortid')
const URL = require('../models/url')

async function handleGenarateNewShortUrl(req, res) {

    const body = req.body
    const shortId = shortid()

    if (!body.url) return  res.render('home', { 'error': 'url is require' })

    await URL.create({
        shortId: shortId,
        redirectUrl: body.url,
        visitHistory: [],
        createBy:req.user._id,
    })


    res.render('home', { newUrl: `http://localhost:8000/${shortId}` })
}
async function handleRedirect(req, res) {
    const shortId = req.params.shortId
    const entry = await URL.findOneAndUpdate({ shortId }, {
        $push: {
            visitHistory: [{
                timestamp: Date.now()
            }]
        }
    })

    if (!entry) {
        return res.status(404).send("Not found");
    }

    res.redirect(entry.redirectUrl)
}
async function handleHome(req, res) {
    const allUrl = await URL.find({})
    return res.render('home', {
        urls: allUrl
    })
}
async function handleData(req, res) {
    const user = req.user._id
    const allUrl = await URL.find({createBy:user})
    return res.render('table', {
        urls: allUrl
    })
}


module.exports = {
    handleGenarateNewShortUrl, handleRedirect, handleHome,handleData

}