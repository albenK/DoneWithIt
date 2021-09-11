import apiClient from "./client";

const endpoint = '/listings';

const getListings = () => {
    return apiClient.get(endpoint);
};

const LISTINGS_API = {
    getListings,
};
export default LISTINGS_API;

