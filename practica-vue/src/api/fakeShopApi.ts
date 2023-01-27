import axios ,{ AxiosHeaders } from "axios";

const fakeShopApi = axios.create({
  baseURL: "https://api.escuelajs.co/api/v1",
  headers: {
    'Authorization': `Bearer ${window.localStorage.getItem('access_token')}`,
  }
});

fakeShopApi.interceptors.request.use((config) => {
  const token = localStorage.getItem('access_token');
if(token) {
  (config.headers as AxiosHeaders).set("Authorization", `Bearer ${token}`); // JWT
} 
return config;
});

export default fakeShopApi;
