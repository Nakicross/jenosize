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
const corsOptions = { origin: "*" };
app.use(cors(corsOptions));


app.use(bodyParser.json({ limit: '5mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '5mb' }));
app.use(express.json({ limit: '5mb' })); 
app.use(express.urlencoded({ limit: '5mb', extended: true }));
 
app.use('/api', restaurantRoute); 
app.use('/login',apiKeyMiddleware, authRoute);

const usedIndices = new Set(); // สร้าง Set เพื่อเก็บดัชนีที่ใช้ไปแล้ว

app.post('/api/botMove', (req, res) => {
    const { board } = req.body;
    const availableMoves = [];
    
    console.log(req.body)
    board.forEach((square, index) => {
      if (!square) {
        availableMoves.push(index);
      }
    });
  
    // Randomly select one available move
    const randomIndex = Math.floor(Math.random() * availableMoves.length);
    const botIndex = availableMoves[randomIndex];
    console.log(botIndex);
  
    res.status(200).json({ index: botIndex });
  });

app.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}`));
  