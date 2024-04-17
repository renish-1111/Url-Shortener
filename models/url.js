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
    visitHistory: [{ timestamp: { type: Number } }],
    createBy: {
        type:mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }
},
{
    timestamps: true
})

module.exports = mongoose.model('Url', urlSchma)