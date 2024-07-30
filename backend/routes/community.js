const express = require("express")
const router = express.Router()
const {addpost,getallpost,  getfarmerposts}=require('../controllers/community')
router.post('/addpost',addpost)
router.get('/getallpost',getallpost)
router.get('/getfarmerpost/:id',  getfarmerposts)
module.exports = router