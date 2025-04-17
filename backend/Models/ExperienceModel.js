import mongoose from "mongoose";

const ExperienceSchema = new mongoose.Schema({
    email : {
        type : String,
        required : true
    },
    company : {
        type : String,
        required : true
    },
    position : {
        type : String,
        required : true
    },
    duration : {
        type : String,
        required : true
    }
}, {timestamps : true})

const ExperienceModel = mongoose.model('experience', ExperienceSchema)

module.exports = ExperienceModel