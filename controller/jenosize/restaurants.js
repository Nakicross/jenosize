const axios = require('axios');
require('dotenv').config();

exports.getrestaurants = async (req, res) => {
  try {

    const API_KEY = process.env.APIKEY;
    const { data } = await axios.get('https://maps.googleapis.com/maps/api/place/textsearch/json', {
      params: {
        query: 'restaurants ',
        key: API_KEY
      }
    });
    
    const restaurants = data.results.map(result => {
      const photos = result.photos ? result.photos.map(photo => ({
        width: photo.width,
        height: photo.height,
        photo_reference: photo.photo_reference,
        url: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photo.photo_reference}&key=${API_KEY}`
      })) : [];

      return {
        name: result.name,
        address: result.formatted_address,
        rating: result.rating,
        types: result.types,
        photos: photos,
      };
    });

    res.json(restaurants);
  } catch (error) {
    console.error('Error fetching restaurants data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.getsearchrestaurants = async (req, res) => {
    try {
      const body = req.body.query ;
      const API_KEY = process.env.APIKEY;
      const { data } = await axios.get('https://maps.googleapis.com/maps/api/place/textsearch/json', {
        params: {
          query: 'restaurants' + body,
          key: API_KEY
        }
      });
      console.log(body)
      
      const restaurants = data.results.map(result => {
        const photos = result.photos ? result.photos.map(photo => ({
          width: photo.width,
          height: photo.height,
          photo_reference: photo.photo_reference,
          url: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photo.photo_reference}&key=${API_KEY}`
        })) : [];
  
        return {
          name: result.name,
          address: result.formatted_address,
          rating: result.rating,
          types: result.types,
          photos: photos,
        };
      });
  
      res.json(restaurants);
    } catch (error) {
      console.error('Error fetching restaurants data:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };