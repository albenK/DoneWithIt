import { create } from 'apisauce'; // wrapper around axios
import API_ENDPOINT from './endpoint';

const apiClient = create({
    baseURL: API_ENDPOINT,
});

export default apiClient;



