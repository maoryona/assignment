const express = require('express');
const YelpService = require('../../services/YelpService');
const router = express.Router();


router.get('/', async (req, res) => {
  try {
    const {term, limit, location} = req.query;
    const results =  await YelpService.search(term, limit, location);
    res.status(200).json({ businesses: results.businesses });
  } catch (error) {
    console.log(error);
    res.status(422).json({ status: 0 });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const {id} = req.params;
    const details =  await YelpService.getDetails(id);
    res.status(200).json(details);
  } catch (error) {
    console.log(error);
    res.status(422).json({ status: 0 });
  }
});

module.exports = (app) => {
  app.use('/business', router);
};