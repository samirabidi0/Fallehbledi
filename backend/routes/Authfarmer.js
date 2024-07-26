const express = require("express")
const router = express.Router()
const SignIn = require('../controllers/Auth/FarmerSignIn')
const {Register} = require("../controllers/Auth/FarmerSignUp")


router.post("/signup" , Register)
router.post("/signin", SignIn)

module.exports = router