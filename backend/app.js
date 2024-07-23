const express = require ('express')
const dotenv = require("dotenv")
const prisma = require("./database/prisma")
//Load environment variables from .env file
dotenv.config();

//Declare the express app
const app = express();

//Set port
const port = 5000;

//Listen for requests :
app.listen(port,()=>console.log('App listening on port ${port}!'))