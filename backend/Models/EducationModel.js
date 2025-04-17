import mongoose from "mongoose";

const EducationSchema = new mongoose.Schema({
    email : {
        type : String,
        required : true
    },
    school : {
        type : String,
        required : true
    },
    degree : {
        type : String,
        required : true
    },
    year : {
        type : String,
        required : true
    }
}, {timestamps : true})

const EducationModel = mongoose.model('education', EducationSchema)

module.exports = EducationModel