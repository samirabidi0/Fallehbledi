const express = require ('express')
const dotenv = require("dotenv")
const  {pricesData} = require('./helpers/pricesData')
const prisma = require("./database/prisma")
const cors = require("cors")
const routersAuthfarmer = require("./routes/Authfarmer.js")
const routerFarmtools = require("./routes/FarmerTools.js")
const app = express();




app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//Load environment variables from .env file
dotenv.config();


//Set port
const port = 5000;

app.get('/prices',pricesData);
app.use('/api/farmer',routersAuthfarmer)
app.use('/api/tools', routerFarmtools)


//Listen for requests :
app.listen(port,()=>console.log(`App listening on port ${port}!`))