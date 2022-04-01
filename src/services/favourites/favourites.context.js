import React, { useState, createContext, useEffect } from 'react'
import AsyncStorage from "@react-native-async-storage/async-storage";


export const FavouritesContext = createContext();

export const FavouritesContextProvider = ({ children }) => {
    // create state untuk favourites
    const [favourites, setFavourites] = useState([]);

    // function untuk store favourites restonya
    const saveFavourites = async (value) => {
        try {
            const jsonValue = JSON.stringify(value)
            await AsyncStorage.setItem('@favourites', jsonValue)
            } catch (e) {
                console.log('error storing : ', e);
            }
        }

    // ini buat get datanya
    const loadFavourites = async () => {
        try {
        const value = await AsyncStorage.getItem('@favourites')
        if(value !== null) {
            // kalau ada data-nya
            setFavourites(JSON.parse(value))
        }
        } catch(e) {
            console.log('error loading : ', e);
        }
    }   

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

    // load dulu datanya sebelum save 
    useEffect(() => {
        loadFavourites();
    }, []);

    // kalau ada perubahan favourites, ini akan ke trigger
    useEffect(() => {
        saveFavourites(favourites);
    }, [favourites]);

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