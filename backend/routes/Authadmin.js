const express =require('express')
const router =express.Router()
const signUpAdmin=require ('../controllers/Auth/AdminSignUp')
const signInAdmin=require ('../controllers/Auth/AdminSignIn')
router.post("/signup",signUpAdmin)
router.post("/signin",signInAdmin)
module.exports = router
