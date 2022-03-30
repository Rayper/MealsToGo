import React, { useState, useEffect, createContext } from 'react'
import { locationRequest, locationTransform } from './location.service'

import {locations} from './location.mock'

export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {
    const [location, setLocation] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [keyword, setKeyword] = useState("san francisco");

    const onSearch = (searchKeyword) => {
        console.log(searchKeyword);
        setIsLoading(true);
        setKeyword(searchKeyword);
        // jadiin lowercase supaya mudah pas searchingnya
        locationRequest(searchKeyword.toLowerCase())
        .then(locationTransform)
        .then((result) => {
            setIsLoading(false);
            setLocation(result);
            console.log(result);
        })
        .catch((err) => {
            setIsLoading(false);
            setError(err);
        })
    }

    useEffect(() => {
        onSearch(keyword)
    }, []);

    return (
        <LocationContext.Provider 
            value={{
                location, 
                isLoading,
                error,
                keyword,
                search: onSearch,
            }}
        >{children}
        </LocationContext.Provider>
    )

}