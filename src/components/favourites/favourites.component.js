import React, { useContext } from 'react'
import styled from 'styled-components'
import { AntDesign } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native'
import { FavouritesContext } from '../../services/favourites/favourites.context'

// z-index: 9 -> supaya pop di top
const FavouriteButton = styled(TouchableOpacity)`
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 9;
`;

export const Favourite = ({ restaurant }) => {
    const { favourites, addToFavourites, removeFromFavourites } = useContext(FavouritesContext);
    
    // cek apakah resto tersebut adalah favourites
    const isFavourites = favourites.find((r) => r.placeId === restaurant.placeId);
    return (
        <FavouriteButton 
            onPress={() =>
                // jika bukan favourites, addToFavourites 
                !isFavourites ?
                addToFavourites(restaurant) :
                removeFromFavourites(restaurant)}
        
        >
            <AntDesign 
                name={
                    // jika isFavourites true, pakai heart
                    isFavourites ? "heart" : "hearto"
                }
                size={24}
                color={
                    // jika isFavourites true, heartnya warna merah
                    isFavourites ? "red" : "white"
                }
            />
        </FavouriteButton>
    );
};