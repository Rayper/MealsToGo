import React, { useState, createContext } from 'react'

export const FavouritesContext = createContext();

export const FavouritesContextProvider = ({ children }) => {
    // create state untuk favourites
    const [favourites, setFavourites] = useState([]);

    const add = (restaurant) => {
        setFavourites([...favourites, restaurant]);
    }

    const remove = (restaurant) => {
        // cek resto mana yang akan diremove
        // jika placeId match, dont add
        const newFavourites = favourites.filter(
            (x) => x.placeId !== restaurant.placeId
        );

        setFavourites(newFavourites);
    }

    return (
        <FavouritesContext.Provider
                value={{
                favourites,
                addToFavourites: add,
                removeFromFavourites: remove,
            }}
        >
            {children}
        </FavouritesContext.Provider>
    )
}