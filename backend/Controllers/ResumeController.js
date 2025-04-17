require('../Models/ResumeDataModel')

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
            res.json({message : 'Hello from the server'})
        } catch (error) {
            console.log(error)
        }
    }

    static resume_data = async (req, res) => {
        try {
            console.log(req);
            
            // const new_resume_data = new ResumeDataModel({
            //     firstName = req.
            // })
        } catch (error) {
            console.log(error)
        }
    }


}

module.exports = ResumeController