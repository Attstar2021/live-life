import axios from "axios";

axios.defaults.baseURL = "https://8000-attstar2021-livelifedrf-j8gg6lqmwpu.ws-eu79.gitpod.io/"
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();