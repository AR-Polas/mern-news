const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
require('dotenv').config()

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());


app.use('/news',require('./routers/newsRoute'))
app.use('/news',require('./routers/userRoute'))

const URL = process.env.MONGODB_URL
mongoose.connect(URL,{
    useCreateIndex : true,
    useFindAndModify : true,
    useNewUrlParser : true,
    useUnifiedTopology : true
}, e => {
    if(e) throw e.message
    else console.log('mongodb connect')
})

if (process.env.NODE_ENV === "production"){
    app.use(express.static("client/build"))
}
app.listen(process.env.PORT || 5000, () => console.log('localhost running on port 5000'))