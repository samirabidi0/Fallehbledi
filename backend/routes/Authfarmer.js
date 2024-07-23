const express = require("express")
const router = express.Router()
const {Register} = require("../controllers/Auth/FarmerSignUp")
router.post("/signup" , Register)
module.exports = router