const express = require('express')
const ResumeController = require('../Controllers/ResumeController')
const route = express.Router()

//router
route.get('/', ResumeController.home)
route.get('/test', ResumeController.test)
route.get('/resumedata', ResumeController.resume_data)


module.exports = route