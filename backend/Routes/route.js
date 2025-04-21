const express = require('express')
const ResumeController = require('../Controllers/ResumeController')
const route = express.Router()

//router
route.get('/', ResumeController.home)
route.get('/test', ResumeController.test)
route.post('/resumedata', ResumeController.save_resume_data)
route.post('/getresumedata', ResumeController.get_resume_data)


module.exports = route