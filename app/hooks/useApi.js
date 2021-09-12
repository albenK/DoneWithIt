import { useState } from "react";

const useApi = (apiFunction) => {
    const [ data, setData ] = useState([]);
    const [ hasError, setHasError ] = useState(false); // Don't care about the error message.
    const [ isLoading, setIsLoading ] = useState(false);

    const request = async (...args) => {
        setIsLoading(true);
        const response = await apiFunction(...args);
        setIsLoading(false);

        if (!response.ok) {
            return setHasError(true);
        }
        setHasError(false);
        setData(response.data);
    };

    return {
        data,
        hasError,
        isLoading,
        request,
    };
};

export default useApi;