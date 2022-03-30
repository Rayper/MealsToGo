import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { Searchbar } from "react-native-paper";

import { LocationContext } from '../../../services/location/location.context'

const SearchContainer = styled.View`
    padding: ${(props) => props.theme.space[3]};
    backgroundColor: ${(props) => props.theme.colors.bg.restaurant};
`;

export const Search = () => {
    const { keyword, search } = useContext(LocationContext);
    const [searchKeyword, setSearchKeyword] = useState(keyword);

    return (
        <SearchContainer >
            <Searchbar 
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