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
    },
    education : [{
        school : {
            type : String,
            required : false
        },
        degree : {
            type : String,
            required : false
        },
        year : {
            type : String,
            required : false
        }
    }],
    experience : [{
        company : {
            type : String,
            required : false
        },
        position : {
            type : String,
            required : false
        },
        duration : {
            type : String,
            required : false
        }
    }],
    skills : [{
        type : String,
        required : false
    }],
    achievements : [{
        title : {
            type : String,
            required : false
        },
        file : {
            type : String,
            required : false
        }
    }],
    projects : [{
        title : {
            type : String,
            required : false
        },
        url : {
            type : String,
            required : false
        },
        git_link : {
            type : String,
            required : false
        },
        images : {
            type : String,
            required : false
        },
        description : {
            type : String,
            required : false
        }
    }],
    socialLinks : {
        github : {
            type : String,
            required : false
        },
        linkedin : {
            type : String,
            required : false
        },
        instagram : {
            type : String,
            required : false
        },
        facebook : {
            type : String,
            required : false
        },
        portfolio : {
            type : String,
            required : false
        }
    },
    otherSocialLinks : [{
        name : {
            type : String,
            required : false
        },
        link : {
            type : String,
            required : false
        }
    }]
}, {timestamps : true})

const ResumeDataModel = mongoose.model('resume_data', ResumeDataSchema)

module.exports = ResumeDataModel