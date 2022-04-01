import React, { useState, createContext, useEffect, useContext } from 'react'
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthenticationContext } from '../../services/authentication/authentication.context'


export const FavouritesContext = createContext();

export const FavouritesContextProvider = ({ children }) => {
    const { user } = useContext(AuthenticationContext);
    // create state untuk favourites
    const [favourites, setFavourites] = useState([]);
    
    // function untuk store favourites restonya
    const saveFavourites = async (value, uid) => {
        try {
            const jsonValue = JSON.stringify(value)
            await AsyncStorage.setItem(`@favourites-${uid}`, jsonValue)
            } catch (e) {
                console.log('error storing : ', e);
            }
        }

    // ini buat get datanya
    const loadFavourites = async (uid) => {
        try {
        const value = await AsyncStorage.getItem(`@favourites-${uid}`)
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
    // ke trigger pada saat ganti user 
    useEffect(() => {
        // jika user ada value dan uid untuk favourites
        if(user && user.uid) {
            loadFavourites(user.uid);
        }
    }, [user]);

    // kalau ada perubahan favourites, ini akan ke trigger
    useEffect(() => {
        // jika user ada value, uid dan punya favourites
        if(user && user.uid && favourites.length) {
            saveFavourites(favourites, user.uid);
        }
    }, [favourites, user]);

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