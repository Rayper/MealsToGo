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

export const Favourite = () => {
    const { favourites, addToFavourites, removeFromFavourites } = useContext(FavouritesContext)
    
    return (
        <FavouriteButton>
            <AntDesign 
                name="heart"
                size={24}
                color="red"
            />
        </FavouriteButton>
    )
}