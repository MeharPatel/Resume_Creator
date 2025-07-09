const express = require('express')
const ResumeController = require('../Controllers/ResumeController')
const UserController = require('../Controllers/UserController')
const route = express.Router()

//router
route.get('/', ResumeController.home)
route.get('/test', ResumeController.test)
route.post('/resumedata', ResumeController.save_resume_data)
route.post('/getresumedata', ResumeController.get_resume_data)

route.post('/register_user', UserController.register_user)
route.post('/login_user', UserController.login_user)


module.exports = route