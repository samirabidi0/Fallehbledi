const express = require ('express')
const dotenv = require("dotenv")
const  {pricesData} = require('./helpers/pricesData')
const prisma = require("./database/prisma")
const routersAuthfarmer = require("./routes/Authfarmer.js")

const routerFarmtools = require("./routes/FarmerTools.js")

const {getWeather} = require('./WeatherAPI/Weather.js')
//Declare the express app
const cors = require("cors")
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

app.use('/api/tools', routerFarmtools)

app.get('/weather',getWeather)



//Listen for requests  :
app.listen(port,()=>console.log(`App listening on port ${port}!`))