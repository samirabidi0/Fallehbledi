const express = require("express")
const router = express.Router()
const SignIn = require('../controllers/Auth/FarmerSignIn')
const {Register} = require("../controllers/Auth/FarmerSignUp")
const {GetOneFarmer,updateProfile,GetAllFarmers} = require("../controllers/Farmer");
router.get("/get/:id",GetOneFarmer)
router.get("/get",GetAllFarmers)
router.put("/:id" , updateProfile)
router.post("/signup" , Register)
router.post("/signin", SignIn)
module.exports = router