import mongoose from "mongoose";

const SkillSchema = new mongoose.Schema({
    email : {
        type : String,
        required : true
    },
    skill : {
        type : String,
        required : true
    }
}, {timestamps : true})

const SkillsModel = mongoose.model('skills', SkillSchema)

module.exports = SkillsModel