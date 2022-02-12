import axios from "axios"

const BASE_URL = process.env.REACT_APP_BASE_URL;

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 120000,
  headers: {
    Accept: "application/json"
  },
});

const apiService = {
   get: (url) => {
    return api
      .get(url, {
        baseURL: BASE_URL,
      })
      .then(response => Promise.resolve(response.data))
      .catch(err => Promise.reject(err));
  }
}

export default apiService