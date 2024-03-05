const express = require('express');
const router = express.Router();
const restaurantsController = require('../controller/jenosize/restaurants');


router.post('/restaurants', restaurantsController.getrestaurants);
router.post('/searchrestaurants', restaurantsController.getsearchrestaurants);
http://localhost:4000/api/searchrestaurants

module.exports = router; 