const yelp = require('../api/yelpAPI');

module.exports = class YelpService {

  static async search(term, limit, location) {
    try {
      const res = await yelp.get('/search', {
        params: {
          limit,
          location,
          term,
        }
      });
      return res.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  static async getDetails(id) {
    try {
      const res = await yelp.get(`/${id}`);
      return res.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  
}