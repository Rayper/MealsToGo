import React from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import styled from 'styled-components'
import { Spacer } from '../spacer/spacer.component'
import { CompactRestaurantInfo } from '../restaurant/compact-restaurant-info.component'
import { Text } from '../typography/text.component'

const FavouritesWrapper = styled.View`
    padding: 10px;
    background-color: #6cb221
`;

// horizontal showsHorizontalScrollIndicator={false} -> supaya melebar ke kanan
export const FavouritesBar = ({ favourites, onNavigate }) => {
    return (
        <FavouritesWrapper>

            <Spacer variant="left.large">
                <Text variant="caption">Favourites</Text>
            </Spacer>

            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {/* looping restorant yang jadi favourites */}
                {favourites.map((restaurant) => {
                    // generate key untuk masing2 resto
                    const key = restaurant.name;
                    return (
                        <Spacer key={key} position="left" size="medium">
                            <TouchableOpacity
                                onPress={() =>
                                    onNavigate("RestaurantDetail", {
                                        restaurant,
                                    })
                                }
                            >
                                <CompactRestaurantInfo restaurant={restaurant} />
                            </TouchableOpacity>
                        </Spacer>
                    );
                })}
            </ScrollView>
        </FavouritesWrapper>
    )
}