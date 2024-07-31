const express =require('express')
const router=express.Router()
const{addComment,getAllComments,getComment}=require('../controllers/comment')
router.post("/add",addComment)
router.get("/getall",getComment)
router.get("/getone/:id",getAllComments)
module.exports=router