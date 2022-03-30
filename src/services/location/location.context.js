import React, { useState, useEffect, createContext } from 'react'
import { locationRequest, locationTransform } from './location.service'

import {locations} from './location.mock'

export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {
    const [location, setLocation] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [keyword, setKeyword] = useState("Chicago");

    const onSearch = (searchKeyword) => {
        setIsLoading(true);
        setKeyword(searchKeyword);
    }

    // trigger ketika keyword berubah
    useEffect(() => {
        // jika tidak ada text, do nothing
        if(!keyword.length) {
            return;
        }
        // jadiin lowercase supaya mudah pas searchingnya
        locationRequest(keyword.toLowerCase())
        .then(locationTransform)
        .then((result) => {
            setIsLoading(false);
            setLocation(result);
        })
        .catch((err) => {
            setIsLoading(false);
            setError(err);
        })
    }, [keyword]);

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