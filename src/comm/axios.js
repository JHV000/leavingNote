import axios from 'axios'
axios.defaults.baseURL = '/'; // 配置axios请求的地址
// axios.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8';
// axios.defaults.crossDomain = true;
axios.defaults.withCredentials = false; //设置cross跨域 并设置访问权限 允许跨域携带cookie信息
// axios.defaults.headers.common['Authorization'] = ''; // 设置请求头为 Authorization

//配置发送请求前的拦截器 可以设置token信息 
axios.interceptors.request.use(res => {
    return res;
}, error => {
    return Promise.reject(error);
});

// 配置响应拦截器 
axios.interceptors.response.use(res => {
    //这里面写所需要的代码


    if (res.status === 200) {
        return Promise.resolve(res.data);
    } else {
        // console.log(res.response);
        return Promise.reject({
            code: -1,
            msg: '请求出错'
        });
    }

}, error => {
    // console.log(error.response);
    return Promise.reject(error);
});

export default axios;