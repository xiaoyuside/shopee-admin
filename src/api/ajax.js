import { message } from "antd";
import axios from "axios";

const ajax = (url, data = {}, type = "GET") => {
  // if (type === 'GET') {
  //     return axios.get(url, {
  //         params: data
  //     });
  // } else {
  //     return axios.post(url, data);
  // }

  return new Promise((resolve, reject) => {
    let promise;
    if (type === "GET") {
      promise = axios.get(url, { params: data });
    } else {
      promise = axios.post(url, data);
    }
    promise
      .then((resp) => resolve(resp))
      .catch((err) => message.error("some error occoured..."));
  });
};

export default ajax;
