import React, { useContext, useState, useEffect } from 'react'
import styled from 'styled-components'
import { Searchbar } from "react-native-paper";
import { LocationContext } from '../../../services/location/location.context';

// z-index: 999 supaya ke-render di top
const SearchContainer = styled.View`
    padding: ${(props) => props.theme.space[3]};
    z-index: 999;
    top: 28px;
    width: 100%;
`;

export const Search = () => {
    const { keyword, search } = useContext(LocationContext);
    const [searchKeyword, setSearchKeyword] = useState(keyword);

    // setSearchKeyword dengan keyword ketika keyword berubah
    // jadi ketika keyword berubah, kita rubah juga searchKeyWord
    useEffect(() => {
        setSearchKeyword(keyword);
    }, [keyword]);

    return (
        <SearchContainer >
            <Searchbar 
                placeholder='Search for a location'
                icon="map"
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