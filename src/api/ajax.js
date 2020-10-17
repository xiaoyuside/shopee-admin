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

  // handling all error in one place
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

/**
 * another way to use axios:
 * 
 * 
import { message } from 'antd';
import axios from 'axios';

const devBaseUrl = 'https://cnodejs.org/api/v1';
const prodBaseUrl = 'xx';

const isDev = process.env.NODE_ENV === 'development';

// setup the base url
const service = axios.create({
    baseURL: isDev ? devBaseUrl : prodBaseUrl,
});

// intercept request and response 
//often use  to  handle errors or handle token...
service.interceptors.request.use(req => {
    console.log('req interceptor, req:  ', req);
    return req;
});
service.interceptors.response.use(resp => {
    console.log('resp interceptor, resp: ', resp);

    if (resp.status === 200) {
        // if resp ok, take data from resp
        return resp.data;
    } else {
        message.error('Something go wrong.');
        return resp;
    }

});

const getTopics = (page = 1, limit = 5) => {
    return service.get(`/topics?page=${page}&limit=${limit}`);
};

export {
    getTopics,
}
 * 
 */