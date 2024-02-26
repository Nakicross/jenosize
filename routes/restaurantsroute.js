const express = require('express');
const router = express.Router();
const restaurantsController = require('../controller/jenosize/restaurants');


router.get('/restaurants', restaurantsController.getrestaurants);

module.exports = router; 