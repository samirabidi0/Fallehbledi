const express = require ('express')
const dotenv = require("dotenv")
const cors = require('cors');
const  {pricesData} = require('./helpers/pricesData')
const prisma = require("./database/prisma")
const bodyParser = require('body-parser')
const app = express();
const routersAuthfarmer = require("./routes/Authfarmer")
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//Load environment variables from .env file
dotenv.config();


//Declare the express app


//Set port
const port = 5000;

app.get('/prices',pricesData);
app.use('/api/farmer',routersAuthfarmer)


//Listen for requests :
app.listen(port,()=>console.log(`App listening on port ${port}!`))