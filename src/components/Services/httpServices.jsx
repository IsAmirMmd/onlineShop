import axios from "axios";

axios.defaults.baseURL = "http://localhost:5000/api";

const http = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};

export default http;
