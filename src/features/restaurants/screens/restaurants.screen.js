import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';
import { Searchbar } from 'react-native-paper'
import { RestaurantInfoCard } from '../components/restaurant-info.component';
import styled from "styled-components/native";

// ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
// untuk ngatasin ios karena tidak support syntax ini margin-top: ${StatusBar.currentHeight}px;
// syntax ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`}; ngecek
// jika statusBar.currenHeight memiliki value, maka add marginTop
// padding: ${(props) => props.theme.space[3]}; sama aja kyak padding: 16 karena di setting space ambil array ke 3
const SafeArea = styled(SafeAreaView)`
    flex: 1;
    ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SearchContainer = styled.View`
    padding: ${(props) => props.theme.space[4]};
    backgroundColor: ${(props) => props.theme.colors.bg.restaurant};
`;

const RestaurantListContainer = styled.View`
    flex: 1;
    padding: ${(props) => props.theme.space[3]};
    backgroundColor: ${(props) => props.theme.colors.bg.list};
`;

export const RestaurantScreen = () => (
    <SafeArea>
        <SearchContainer >
            <Searchbar />
        </SearchContainer>
        <RestaurantListContainer>
            <RestaurantInfoCard />
        </RestaurantListContainer>
    </SafeArea>
);