const axios = require('axios');
//получаем токен
const API_TOKEN = process.env.NEXT_PUBLIC_STRAPI_BACKEND_API_TOKEN;
//выполняем регистрацию через токен Bearer
const axiosClient = axios.create({
    baseURL:`${process.env.NEXT_PUBLIC_STRAPI_BACKEND_URL}/api`,
    headers: {
        'Authorization': `Bearer ${API_TOKEN}`
    }
});

    const getSpecilization = () => axiosClient.get('/specilizations?populate=*');

    const getDoctor = () => axiosClient.get('/doctors?sort[]=id:desc&populate=*');
    
    const getSingleDoctor = (id) => axiosClient.get('/doctors?filters[slug][$eqi]=' + id + '&populate=*');

    const getSpec = () => axiosClient.get('/specs?populate=*');

    const getService = () => axiosClient.get('/services?populate=*');

    const getFooter = () => axiosClient.get('/footers?populate=*');



    const createOrder = (data) => axiosClient.post('/orders', data);
    const createJob = (data) => axiosClient.post('/jobs', data);


export default{
    getSpecilization,
    getDoctor,
    getSpec,
    getService,
    getFooter,
    getSingleDoctor,
    createOrder,
    createJob,
}