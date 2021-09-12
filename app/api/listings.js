import apiClient from "./client";

const endpoint = '/listings';

const getListings = () => {
    return apiClient.get(endpoint);
};

const addListing = (listing) => {
    const formData = new FormData();
    formData.append('title', listing.title);
    formData.append('price', listing.price);
    formData.append('categoryId', listing.category.value);
    formData.append('description', listing.description);

    // axios/apisauce will automatically set content type header as multipart/form-data when it sees a FormData
    listing.images.forEach((image, index) => {
        formData.append('images', {
            name: 'image' + index,
            type: 'image/jpeg',
            uri: image
        });
    });

    if (listing.location) {
        formData.append('location', JSON.stringify(listing.location));
    }

    return apiClient.post(endpoint,formData);
};

const LISTINGS_API = {
    getListings,
    addListing,
};
export default LISTINGS_API;

