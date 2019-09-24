const axios = require('axios');

module.exports = axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'bearer f-Pf9qVGOFrAAUtPdJiNBAcuf0jgqKSqo36xmB3lZkJ59wKR3YReLeijui9oYpy9U8W0Sfye4vqHcmGXYaHUxAVm0SVBR2noY-XqRkZR4SzFfQQNzJV9uZJx7RRyXXYx',
  }
});
