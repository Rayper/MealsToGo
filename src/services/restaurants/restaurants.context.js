import React, { useState, createContext, useEffect, useMemo } from 'react'

import { restaurantsRequest, restaurantsTransform } from './restaurants.services'

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
    const [restaurants, setRestaurants] = useState([]);
    //  by default isLoadingnya false
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const retrieveRestaurants = () => {
        // loading selama 2 detik
        setIsLoading(true);
        setTimeout(() => {
            restaurantsRequest()
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
        retrieveRestaurants();
    }, []);


    return (
        <RestaurantsContext.Provider value={{ 
            restaurants,
            isLoading,
            error
        }}
        >{children}</RestaurantsContext.Provider>
    )
}