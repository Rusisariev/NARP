import axios from "axios";
import {BASE_URL} from "./config";

const instance = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json",
    }
})

instance.interceptors.request.use(config => {
    if (window.localStorage.getItem("token")) {
        config.headers.Authorization = `Bearer ${window.localStorage.getItem("token")}`
    }

    return config
}, error => {
    return Promise.reject(error)
})

export default instance