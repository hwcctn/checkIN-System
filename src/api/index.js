// index.js
//网络请求方法放在这个文件


import path from "./path"
import axios from "../utils/request"
axios.defaults.withCredentials = true;
const api={
    postRegister(params,config){
        return axios.post(path.baseUrl+path.register,params,config
          )
    },
    getStudentInfo(params){
        return axios.get(path.baseUrl+path.studentInfo,{ params: params })
    },
    getScore(params){
        return axios.get(path.baseUrl+path.score,{ params: params })
    },
}

export default api
   
