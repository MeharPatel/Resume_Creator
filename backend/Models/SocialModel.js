import mongoose from "mongoose";

const SocialSchema = new mongoose.Schema({
    email : {
        type : String,
        required : true
    },
    name : {
        type : String,
        required : true
    },
    link : {
        type : String,
        required : true
    }
}, {timestamps : true})

const SocialsModel = mongoose.model('socials', SocialSchema)

module.exports = SocialsModel