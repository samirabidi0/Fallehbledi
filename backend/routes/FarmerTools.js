
const express = require('express')
const router = express.Router();

<<<<<<< HEAD
const { CreateFarmtool  } = require('../controllers/FarmerTools.js')
const { GetAllFarmtools } = require('../controllers/FarmerTools.js')
const { DeleteFarmtool } = require('../controllers/FarmerTools.js')
const {GetFarmtoolByName} = require("../controllers/FarmerTools.js")
=======
const { CreateFarmtool, GetAllFarmtools, DeleteFarmtool, GetFarmtoolByName  } = require('../controllers/FarmerTools.js')
>>>>>>> 6da5859135ded88b69d13bf7c6b6792091937684

router.post("/add" ,  CreateFarmtool)
router.get("/all", GetAllFarmtools)
router.delete("/:id", DeleteFarmtool)
router.get("/:name" ,GetFarmtoolByName)

module.exports = router