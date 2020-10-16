import axios from 'axios'

const ajax = (url, data={}, type='GET') => {
    if (type === 'GET') {
        return axios.get(url, {
            params: data
        });
    } else {
        return axios.post(url, data);
    }
};

export default ajax;