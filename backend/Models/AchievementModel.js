import mongoose from "mongoose";

const AchievementSchema = new mongoose.Schema({
    email : {
        type : String,
        required : true
    },
    title : {
        type : String,
        required : true
    },
    file : {
        type : String,
        required : true
    }
}, {timestamps : true})

const AchievementsModel = mongoose.model('achievements', AchievementSchema)

module.exports = AchievementsModel