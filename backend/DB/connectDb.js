const mongoose = require('mongoose')
// const url = "mongodb://0.0.0.0:27017/COE_Project"
const liveUrl = 'mongodb+srv://csmeharpatel:HarleyQuinn2525@practicedb.sdu1gdm.mongodb.net/Resume_Creator?retryWrites=true&w=majority&appName=PracticeDB'

const connectDb = () => {
    return mongoose.connect(liveUrl)
    .then(() => {
        console.log("Connected Successfully")
    })
    .catch((err) => {
        console.log(err)
    })
}

module.exports = connectDb