const mongoose = require('mongoose')

const urlSchma = new mongoose.Schema({
    shortId: {
        type: String,
        required: true
    },
    redirectUrl: {
        type: String,
        required: true,
    },
    visitHistory: [{ timestamp: { type: Number } }]
},{
    timestamps:true
})

module.exports = mongoose.model('Url', urlSchma)