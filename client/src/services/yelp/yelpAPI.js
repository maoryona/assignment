import axios from 'axios';
import config from '../../web.config';

export default axios.create({
  baseURL: config.useDocker ? '/api/business' : 'http://localhost:3000/business',
  headers: {
    headers: {'Access-Control-Allow-Origin': '*'},
  }
});
