import axios from 'axios';

const backendService = axios.create({
    baseURL: "https://api.spaceXdata.com/v3",
    timeout: 3000
});

const requestInterceptor = (request) => {
    return request;
  };
  
const responseInterceptor = (response) => {
    return response;
};

backendService.interceptors.request.use(requestInterceptor);
backendService.interceptors.response.use(responseInterceptor);

export default backendService;