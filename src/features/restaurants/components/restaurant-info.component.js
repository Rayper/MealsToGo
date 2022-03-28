import React from 'react'
import { Card   } from "react-native-paper";
import { Image } from "react-native";
import styled from 'styled-components/native'
import { SvgXml } from "react-native-svg";
import star from '../../../../assets/star'
import open from "../../../../assets/open";
import { Text } from '../../../components/typography/text.component';
import { Spacer } from "../../../components/spacer/spacer.component";
import { Icon, Info, Section, SectionEnd, Rating, Address, RestaurantCard, RestaurantCardCover } from './restaurant-info-styles'

// styled component menggunakan syntax css yang ditranslate menjadi styling pada react native
// oleh karena itu, jika menggunakan pixeling maka harus assign px nya

// const Title = styled.Text`
//     font-size: ${(props) => props.theme.fontSizes.body}
//     font-family: ${(props) => props.theme.fonts.heading}
//     color: ${(props) => props.theme.colors.ui.success}
// `;
// const Open = styled.View`
//     flex-direction: row;
// `;

// create props restaurant untuk dipakai pada restaurantscreen
export const RestaurantInfoCard = ({ restaurant = {} }) => {
    const {name = 'Rayper Resturant',
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = ["https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg"],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
    } = restaurant;
    
    // buletin ratingnya supaya ga error
    const ratingArray = Array.from(new Array(Math.ceil(rating)));

    return (
        <RestaurantCard elevation={5}>
            <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
            <Info>
                <Text variant="label">{name}</Text>
                <Section>
                    <Rating>
                        {ratingArray.map(() => (
                        <SvgXml xml={star} width={20} height={20} />
                        ))}
                    </Rating>
                    <SectionEnd>
                        {isClosedTemporarily && (
                        <Text variant="error">
                            CLOSED TEMPORARILY
                        </Text>
                        )}
                        <Spacer position="left" size="large" />
                        {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
                        <Spacer position="left" size="large" />
                        <Icon source={{ uri: icon }} />
                    </SectionEnd>
                </Section>
                <Address>{address}</Address>
            </Info>
        </RestaurantCard>
    );
}