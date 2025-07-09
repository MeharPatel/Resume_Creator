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
    professional_title : {
        type : String,
        required : true
    },
    professional_description : {
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
    address : {
        type : String,
        required : true
    },
    city : {
        type : String,
        required : true
    },
    state : {
        type : String,
        required : true
    },
    zip_code : {
        type : String,
        required : true
    },
    country : {
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
        field_of_study : {
            type : String,
            required : false
        },
        start_date : {
            type : String,
            required : false
        },
        end_date : {
            type : String,
            required : false
        },
        description : {
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
        start_date : {
            type : String,
            required : false
        },
        end_date : {
            type : String,
            required : false
        },
        current : {
            type : String,
            required : false
        },
        description : {
            type : String,
            required : false
        },
    }],
    skills : [{
        name : {
            type : String,
            required : false
        },
        level : {
            type : String,
            required : false
        }
    }],
    achievements : [{
        title : {
            type : String,
            required : false
        }
    }],
    projects : [{
        title : {
            type : String,
            required : false
        },
        projectUrl : {
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
    }],
    customSections : [{
        sectionName : {
            type : String,
            required : false
        },
        items : [{
            type : String,
            required : false
        }]
    }]
}, {timestamps : true})

const ResumeDataModel = mongoose.model('resume_data', ResumeDataSchema)

module.exports = ResumeDataModel