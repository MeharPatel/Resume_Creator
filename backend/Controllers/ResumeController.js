const ResumeDataModel = require ('../Models/ResumeDataModel')

class ResumeController {

    static home = async (req, res) => {
        try {
            // res.render("home")
            res.send("Home Here")
        } catch (error) {
            console.log(error)
        }
    }

    static test = async (req, res) => {
        try {
            // res.render("home")
            const data = await ResumeDataModel.findOne({email : 'somemail@gmail.com'})
            console.log(data);
            
        } catch (error) {
            console.log(error)
        }
    }

    static resume_data = async (req, res) => {
        try {
            const user_email = req.body.email

            const new_resume_data = new ResumeDataModel({
                firstName : req.body.firstName,
                lastName : req.body.lastName,
                email : user_email,
                phone : req.body.phone,
                education : req.body.education,
                experience : req.body.experience,
                skills : req.body.skills,
                achievements : req.body.achievements,
                projects : req.body.projects,
                socialLinks : req.body.socialLinks,
                otherSocialLinks : req.body.otherSocialLinks
            })
            await new_resume_data.save();

            console.log(req.body);
            console.log(new_resume_data);
            res.json({ message: "Resume saved successfully!" });
        } catch (error) {
            console.log(error)
            res.status(500).json({ error: "Something went wrong!" });
        }
    }

}

module.exports = ResumeController