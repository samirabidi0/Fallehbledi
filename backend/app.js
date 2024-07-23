const express = require ('express')
const dotenv = require("dotenv")
const  {pricesData} = require('./helpers/pricesData')
const prisma = require("./database/prisma")
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//Load environment variables from .env file
dotenv.config();
const routersAuthfarmer = require("./routes/Authfarmer.js")

//Declare the express app
const app = express();

//Set port
const port = 5000;

app.get('/prices',pricesData);
app.use('/api/farmer',routersAuthfarmer)


//Listen for requests :
app.listen(port,()=>console.log(`App listening on port ${port}!`))