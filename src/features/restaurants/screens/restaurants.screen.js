import React, { useContext } from 'react'
import { FlatList, TouchableOpacity } from 'react-native';
import { ActivityIndicator, Colors, Searchbar } from "react-native-paper";
import styled from "styled-components/native";

import { RestaurantInfoCard } from '../components/restaurant-info.component';
import { Search } from '../components/search.component';
import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeArea } from "../../../components/utility/safe-area.component"

import { RestaurantsContext } from "../../../services/restaurants/restaurants.context"

// ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
// untuk ngatasin ios karena tidak support syntax ini margin-top: ${StatusBar.currentHeight}px;
// syntax ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`}; ngecek
// jika statusBar.currenHeight memiliki value, maka add marginTop
// padding: ${(props) => props.theme.space[3]}; sama aja kyak padding: 16 karena di setting space ambil array ke 3
// const SafeArea = styled(SafeAreaView)`
//     flex: 1;
//     ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
// `;

// attrs adalah function attributes yang memungkinkan kita mengakses spesifik props untuk default FlatList
const RestaurantList = styled(FlatList).attrs({
    contentContainerStyle: {
    padding: 16,
    backgroundColor: "#6cb221"
    },
})``;

// margin-left supaya ke tengah karena di Loading sudah set sizenya 50
const Loading = styled(ActivityIndicator)`
    margin-left: -25px;
`;
const LoadingContainer = styled.View`
    position: absolute;
    top: 50%;
    left: 50%;
`;

// contentContainerStyle => apply styling supaya bisa discroll
export const RestaurantScreen = ({ navigation }) => {
    console.log(navigation);
    // pakai resto context disini
    // tambahkan props isLoading, error, dan restaurants
    const { isLoading, restaurants } = useContext(RestaurantsContext);
    return (
        <SafeArea>
            {isLoading && (
                <LoadingContainer>
                    <Loading size={50} animating={true} color="#7cce23" />
                </LoadingContainer>
            )}
            <Search />
            <RestaurantList 
                data={restaurants}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity 
                            onPress={() =>
                                navigation.navigate("RestaurantDetail", {
                                restaurant: item,
                                })
                            }
                        >
                            <Spacer position="bottom" size="large">
                                <RestaurantInfoCard restaurant={item} />
                            </Spacer>
                        </TouchableOpacity>
                    );
                }}
                // ini assign item.name sebagai key
                keyExtractor={(item) => item.name}
            />
        </SafeArea>
    )
};