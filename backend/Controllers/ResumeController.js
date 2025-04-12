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


}

module.exports = ResumeController