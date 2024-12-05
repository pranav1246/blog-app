import axios from 'axios';
import { API_NOTIFICATION_MESSAGE ,SERVICE_URLS} from '../constants/config';
const API_URL='http://localhost:8000';

const axiosInstance=axios.create({
    baseURL:API_URL,
    timeout:10000,
    headers:{
        "Content-Type":"application/json"
    }
})

axiosInstance.interceptors.request.use(
    function(config){
        return config;
    },
    function(error){
        return Promise.reject(error);
    }
)

axiosInstance.interceptors.response.use(
    function(response){
        return processResponse(response)
    },
    function(error){
        return Promise.reject(processError(error));
    }
)

const processResponse=(response)=>{
    if(response?.status===200){
        return {isSuccess:true,data:response.data}
    }else{
        return {
            isFaliure:true,
            status:response?.status,
            msg:response?.msg,
            code:response?.code
        }
    }
}

const processError=(error)=>{
    if(error.response){
       return{
        isError:true,
        msg:API_NOTIFICATION_MESSAGE.responseFailure,
        code:error.response.status
       } 
    }else if(error.request){
        return{
        isError:true,
        msg:API_NOTIFICATION_MESSAGE.requestFailure,
       
        }
       }
       else{
        return{
            isError:true,
            msg:API_NOTIFICATION_MESSAGE.networkFaliure,
            
           }
       }
}


const API={};

for(const [key,value] of Object.entries(SERVICE_URLS)){
    API[key] =(body)=>
        axiosInstance({
            method:value.method,
            url:value.url,
            data:body,
            responseType:value.responseType
        })
    }

export {API}


