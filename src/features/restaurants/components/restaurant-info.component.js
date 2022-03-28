import React from 'react'
import { Card } from "react-native-paper";
import styled from 'styled-components/native'
import { SvgXml } from "react-native-svg";
import star from '../../../../assets/star'

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
    font-size: ${(props) => props.theme.fontSizes.body}
    font-family: ${(props) => props.theme.fonts.heading}
    color: ${(props) => props.theme.colors.ui.success}
`;

const Address = styled.Text`
    font-size: ${(props) => props.theme.fontSizes.caption}
    font-family: ${(props) => props.theme.fonts.heading}
    color: ${(props) => props.theme.colors.ui.success}
`;

// flex-direction-row supaya horizontal
const Rating = styled.View`
    flex-direction: row;
    padding-top:${props => props.theme.space[2]};
    padding-bottom:${props => props.theme.space[2]};
`;

const Info = styled.View`
    padding: ${(props) => props.theme.space[3]};
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
    
    // buletin ratingnya supaya ga error
    const ratingArray = Array.from(new Array(Math.ceil(rating)));

    return (
        <RestaurantCard elevation={5}>
            <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
            <Info>
                <Title>{name}</Title>
                <Rating>
                    {ratingArray.map(() => (
                        <SvgXml xml={star} width={20} height={20}/>
                    ))} 
                </Rating>
                <Address>{address}</Address>
            </Info>
        </RestaurantCard>
    );
}