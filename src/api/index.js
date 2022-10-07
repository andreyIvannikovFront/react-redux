import Api from "./Api";

const api = new Api('https://jsonplaceholder.typicode.com/');

export const getPost = () => {
  return api.get('posts', 'GET')
}