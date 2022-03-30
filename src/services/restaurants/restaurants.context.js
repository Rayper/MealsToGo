import React, { useState, createContext, useEffect, useContext } from 'react'

import { LocationContext } from '../location/location.context';

import { restaurantsRequest, restaurantsTransform } from './restaurants.services'

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
    const [restaurants, setRestaurants] = useState([]);
    //  by default isLoadingnya false
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const { location } = useContext(LocationContext);

    const retrieveRestaurants = (loc) => {
        // loading selama 2 detik
        setIsLoading(true);
        // setiap kali retrieve resto, kita balikin setResto menjadi array kosong untuk searchig resto selanjutnya
        setRestaurants([]);
        setTimeout(() => {
            restaurantsRequest(loc)
            .then(restaurantsTransform)
            .then((results) => {
                setIsLoading(false);
                setRestaurants(results);
            })
            .catch((error) => {
                setIsLoading(false);
                setError(error);
            })
        }, 2000);
    }

    useEffect(() => {
        // jika ada locationya
        if(location) {
            console.log(location); 
            const locationString = `${location.lat},${location.lng}`;
            retrieveRestaurants(locationString);
        }
    }, [location]);


    return (
        <RestaurantsContext.Provider value={{ 
            restaurants,
            isLoading,
            error
        }}
        >{children}</RestaurantsContext.Provider>
    )
}