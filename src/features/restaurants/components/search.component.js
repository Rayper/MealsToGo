import React, { useContext, useState, useEffect } from 'react'
import styled from 'styled-components'
import { Searchbar } from "react-native-paper";

import { LocationContext } from '../../../services/location/location.context'

const SearchContainer = styled.View`
    padding: ${(props) => props.theme.space[3]};
    backgroundColor: ${(props) => props.theme.colors.bg.list};
`;

export const Search = ({ isFavouritesToggled, onFavouritesToggle }) => {
    const { keyword, search } = useContext(LocationContext);
    const [searchKeyword, setSearchKeyword] = useState(keyword);

    useEffect(() => {
        setSearchKeyword(keyword);
    }, [keyword]);

    return (
        <SearchContainer >
            <Searchbar 
                icon={isFavouritesToggled ? "heart" : "heart-outline"}
                iconColor="#7cce23"
                onIconPress={onFavouritesToggle}
                placeholder='Search for a location'
                value={searchKeyword}
                // trigger function search ketika diisi sebuah keyword
                onSubmitEditing={() => {
                    search(searchKeyword);
                }}
                // trigger searchkeyword menjadi text ketika ada perubahan
                onChangeText={(text) => {
                    setSearchKeyword(text);
                }}
            />
        </SearchContainer>
    )
}