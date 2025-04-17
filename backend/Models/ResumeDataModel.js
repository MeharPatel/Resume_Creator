const mongoose = require("mongoose");

const ResumeDataSchema = new mongoose.Schema({
    firstName : {
        type : String,
        required : true
    },
    lastName : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    phone : {
        type : String,
        required : true
    }
}, {timestamps : true})

const ResumeDataModel = mongoose.model('resume_data', ResumeDataSchema)

module.exports = ResumeDataModel