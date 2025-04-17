import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
    email : {
        type : String,
        required : true
    },
    title : {
        type : String,
        required : true
    },
    url : {
        type : String,
        required : true
    },
    git_link : {
        type : String,
        required : true
    },
    images : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    }
}, {timestamps : true})

const ProjectsModel = mongoose.model('projects', ProjectSchema)

module.exports = ProjectsModel