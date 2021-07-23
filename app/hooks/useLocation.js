import { useState, useEffect } from "react";
import * as Location from 'expo-location';

const useLocation = () => {
    const [ location, setLocation ] = useState();

    const requestLocation = async () => {
        try {
            const result = await Location.requestForegroundPermissionsAsync();
            if (!result.granted) {
                return;
            }
            // getLastKnownPositionAsync is faster than getCurrentPositionAsync. Using this is fine for now.
            // https://docs.expo.io/versions/v42.0.0/sdk/location/#locationgetlastknownpositionasyncoptions
            const locationObj = await Location.getLastKnownPositionAsync();
            if (!locationObj) {
                return;
            }
            const coords = locationObj.coords;
            setLocation({ latitude: coords.latitude, longitude: coords.longitude });  
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        requestLocation();
    }, []);

    return location;
};

export default useLocation;