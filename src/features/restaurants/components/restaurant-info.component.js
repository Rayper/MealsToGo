import React from 'react'
import { Text, StyleSheet } from 'react-native'
import { Card } from "react-native-paper";
import styled from 'styled-components/native'

// styled component menggunakan syntax css yang ditranslate menjadi styling pada react native
// oleh karena itu, jika menggunakan pixeling maka harus assign px nya
const RestaurantCard = styled(Card)`
    backgroundColor: ${(props) => props.theme.colors.bg.primary};
`;

const RestaurantCardCover = styled(Card.Cover)`
    padding: ${(props) => props.theme.space[3]};
    backgroundColor: ${(props) => props.theme.colors.bg.primary};
`;

const Title = styled.Text`
    font-family: ${(props) => props.theme.fonts.body}
    padding: ${(props) => props.theme.space[3]};
    color: ${(props) => props.theme.colors.ui.success}
`;

// create props restaurant untuk dipakai pada restaurantscreen
export const RestaurantInfoCard = ({ restaurant = {} }) => {
    const {name = 'Rayper Resturant',
    icon,
    photos = ["https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg"],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
    } = restaurant;
    
    return (
        <RestaurantCard elevation={5}>
            <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
            <Title>{name}</Title>
        </RestaurantCard>
    );
}