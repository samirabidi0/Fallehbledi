
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


module.exports = {
    // query of update profile of farmer 
    updateProfile : async (req,res)=>{
        try {
         const profile = await prisma.farmer.update({
            where: {
              id: req.params.id,
            },
            data : {
            firstName : req.body,     
            lastName  :req.body,
            adress : req.body,
            location : res.body
            }

          }) 
        } catch (error) {
           
        console.error("Failed to update profile:", error);
        res.status(500).send("Failed to update profile"); 
        }

}
}

