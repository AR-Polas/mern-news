const mongoose = require('mongoose')

const NewsSchema = new mongoose.Schema({
    journalist : {
        type : String,
        require : true,
        trim : true
    },
    title : {
        type : String,
        required : true,
        trim : true
    },
    description : {
        type : String,
        required : true
    },
    content : {
        type : String
    },
    category : {
        type : String,
        required : true
    },
    image : {
        type : String,
        required : true
    },
    country : {
        type : String,
        required : true
    }
},{timestamps: true})

module.exports = mongoose.model('news',NewsSchema)