import { dataFetchGenerate } from "../utils/dataFetchGenerate";
import Api from "./Api";

const api = new Api('https://gateway.marvel.com:443/v1/public/');
const API_KEY = 'a7a27b90ef0292f8cb62a278f314868b'

export const getPost = () => {
  return api.get('posts', 'GET')
}

export const getChapters = async () => {
  const data = await api.get(`characters?apikey=${API_KEY}`, 'GET')
  return dataFetchGenerate(data.response)
}