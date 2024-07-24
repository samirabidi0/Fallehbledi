const express = require ('express')
const dotenv = require("dotenv")
const  {pricesData} = require('./helpers/pricesData')
const prisma = require("./database/prisma")
const routersAuthfarmer = require("./routes/Authfarmer.js")
const cors = require ('cors')
//Declare the express app
const app = express();


app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//Set port
const port = 5000;
//Load environment variables from .env file
dotenv.config();



app.get('/prices',pricesData);
app.use('/api/farmer',routersAuthfarmer)


//Listen for requests :
app.listen(port,()=>console.log(`App listening on port ${port}!`))