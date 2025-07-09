const UserModel = require ('../Models/UserModel')
const bcrypt = require ('bcrypt')
const jwt = require('jsonwebtoken')
class UserController {
    
    static register_user = async (req, res) => {
        try {
            const { name, email, password, confirmPassword } = req.body
            const user = await UserModel.findOne({ email : email })
            if(user) {
                res.json({ message : "Email already exists in the Database!" });                
            }
            else{
                console.log(req.body);
                
                if(name && email && password && confirmPassword){
                    if(password == confirmPassword){
                        try{
                            const hash_password = await bcrypt.hash(password, 10); 

                            const new_user_data = new UserModel({
                                name : name,
                                email : email,
                                password : hash_password
                            })
                            await new_user_data.save();
                            
                            console.log(new_user_data);
                            res.json({ message: "User Registered successfully!" });
                        }
                        catch(err){
                            console.log(err);
                        }
                    }
                    else{
                        res.json({ message: "Passwords don't match!" });
                    }
                }
                else{
                    res.json({ message: "Please fill out all the fields!" });
                }
            }
        } catch (error) {
            console.log(error)
            res.status(500).json({ error: "Something went wrong!" });
        }
    }

    static login_user = async (req, res) => {
        try {
            const { email, password } = req.body
            const user = await UserModel.findOne({ email : email })
            if(user) {
                console.log(user);
                const is_matched = await bcrypt.compare(password, user.password)
                if(is_matched){
                    const token = jwt.sign({ id : user._id }, 'He1107h3r3')
                    // console.log(token);
                    res.cookie('token', token)
                    res.json({ message : "Login Successful!", status : 200})
                }
                else{
                    res.json("Wrong Password!")
                }
            }
            else{
                res.json({ message : "Email does not exist in the Database!"})
            }
        } catch (error) {
            console.log(error)
            res.status(500).json({ error: "Something went wrong!" });
        }
    }

}

module.exports = UserController