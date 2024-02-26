require('dotenv').config();

const express = require('express');
const axios = require('axios');


const apiKeyMiddleware = require('./config/apiKeyMiddleware');
const restaurantRoute = require('./routes/restaurantsroute');
const authRoute = require('./routes/loginroute');


const app = express();
const cors = require("cors");
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const API_KEY = process.env.APIKEY; 




app.use(bodyParser.json({ limit: '5mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '5mb' }));
app.use(express.json({ limit: '5mb' })); 
app.use(express.urlencoded({ limit: '5mb', extended: true }));
 
app.use('/api', restaurantRoute); 
app.use('/login',apiKeyMiddleware, authRoute);

app.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}`));
  