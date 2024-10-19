import axios from 'axios';

const url = {
  prod: 'https://api.vkcoders.com/metrica',
  emulator: "http://10.0.2.2:3001/metrica"
}

const api = axios.create({ baseURL: url.prod });

export default api;