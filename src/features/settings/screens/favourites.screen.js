import React, { useContext } from "react";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";

import { FavouritesContext } from "../../../services/favourites/favourites.context";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Title } from '../../account/components/account.styles';

import { RestaurantInfoCard } from "../../restaurants/components/restaurant-info.component";
import { RestaurantList } from "../../restaurants/components/restaurants-list.style";

const NoFavouritesArea = styled(SafeArea)`
    align-items: center;
    justify-content: center;
`;

export const FavouritesScreen = ({ navigation }) => {
    // ambil data favourites-nya
    const { favourites } = useContext(FavouritesContext);

    // cek jika favourites lengthnya ada maka render list favourites restoranya    
    return favourites.length ? (
        <SafeArea>
            <Title>Favourites Restaurants List</Title>
            <RestaurantList
                data={favourites}
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
                keyExtractor={(item) => item.name}
            />
        </SafeArea>
        ) : (
        <NoFavouritesArea>
            <Text center>No favourites restaurants yet</Text>
        </NoFavouritesArea>
    );
};