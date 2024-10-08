import axios from 'axios';

const {url, prefix} = {
  url: 'https://api.vkcoders.com',
  prefix: "/metrica"
}

const api = axios.create({
  baseURL: url + prefix,
  // baseURL: "http://192.168.0.51:3002/pesquisa"
  // baseURL: "http://localhost:3002/pesquisa"
  // baseURL: "http://10.0.2.2:3002/pesquisa"
});

export default api;