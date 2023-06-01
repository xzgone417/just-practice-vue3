import axios from 'axios'
import qs from "qs";
// 创建axios实例
const request = axios.create({
    baseURL: '/api',// 所有的请求地址前缀部分(没有后端请求不用写)
    timeout: 80000, // 请求超时时间(毫秒)
    withCredentials: true,// 异步请求携带cookie
    // headers: {
    //     // 设置后端需要的传参类型
    //     'Content-Type': 'application/x-www-form-urlencoded',
    //     // 'token': x-auth-token',//一开始就要token
    //     // 'X-Requested-With': 'XMLHttpRequest',
    // },
})

// request拦截器
request.interceptors.request.use(
    config => {
        console.log("🚀LOG ~ config:", config);
        // 如果你要去localStor获取token
        // let token = localStorage.getItem("x-auth-token");
        // if (token) {
        //     //添加请求头
        //     config.headers["Authorization"] = "Bearer " + token
        // }
        // config.headers["Content-Type"] = 'application/x-www-form-urlencoded'
        return config
    },
    error => {
        // 对请求错误做些什么
        Promise.reject(error)
    }
)

// response 拦截器
request.interceptors.response.use(
    response => {
        // 对响应数据做点什么
        return response.data
    },
    error => {
        // 对响应错误做点什么
        return Promise.reject(error)
    }
)
export default {
    //get请求
    getRequest(url: any, param: any) {
        return new Promise((resolve) => {
            request({
                method: "get",
                url,
                headers: {
                    "content-type": " application/x-www-form-urlencoded",
                    'whoIAM': "xzgggggg"
                },
                params: qs.stringify(param),
            }).then((res) => {
                resolve(res);
            });
        });
    },

    //post请求
    postRequest(url: any, param: any) {
        return new Promise((resolve, reject) => {
            request.post(url, {
                data: param,
                headers: {
                    "Content-Type": " application/json",
                },
            })
                .then((res) => {
                    resolve(res);
                })
                .catch((err) => {

                    reject(err);
                });
        });
    },
}