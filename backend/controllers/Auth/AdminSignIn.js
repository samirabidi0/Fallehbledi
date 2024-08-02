const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { PrismaClient } = require('@prisma/client');
const { admin } = require('../../database/prisma');
const prisma = new PrismaClient();
require("dotenv").config()
const signInAdmin= async(req,res)=>{
    const { email, password } = req.body;
  console.log(email,password);
    if (!email || !password) {
      return res.status(404).json({ error: "Email or Password not found." });
    }

    try {
      // Retrieve doctor from the database by email
    const admin = await prisma.admin.findUnique({
        where: {
          email: email
        }
      });

      // Check if doctor exists
      if (!admin) {
        return res.status(404).json({ error: "Admin not found." });
      }

      // Checking if the password is valid
      const passwordMatch = await bcrypt.compare(password, admin.password);

      if (!passwordMatch) {
        return res.status(401).json({ error: "Password is incorrect." });
      }

      // Generate a JSON Web Token (JWT) for authentication

      const token = jwt.sign(
        {
          userId: admin.id,
        },
        process.env.JWT_SECRET,
        {
          expiresIn: "1d",
        }
      );

      let loggedUser = {
        id: admin.id,
        FirstName: admin.firstName,
        LastName: admin.lastName,
        email:admin.email,  
      };

      res.status(200).json({ loggedUser, token, message: "Login succeeded" });
    } catch (error) {
      console.error("Sign in error:", error);
      res.status(500).send("Internal server error");
    }
  };
    module.exports=signInAdmin

