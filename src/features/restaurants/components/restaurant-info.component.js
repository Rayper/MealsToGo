import React from 'react'
import { Card   } from "react-native-paper";
import { Text, Image, View } from "react-native";
import styled from 'styled-components/native'
import { SvgXml } from "react-native-svg";
import star from '../../../../assets/star'
import open from "../../../../assets/open";
import { Spacer } from "../../../components/spacer/spacer.component";

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

const Section = styled.View`
    flex-direction: row;
    align-items: center;
`;

// justify-content: flex-end; akan push ke samping
const SectionEnd = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: flex-end;
`;

const Open = styled.View`
    flex-direction: row;
`;

const Info = styled.View`
    padding: ${(props) => props.theme.space[3]};
`;



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
                <Title>{name}</Title>
                <Section>
                    <Rating>
                        {ratingArray.map(() => (
                        <SvgXml xml={star} width={20} height={20} />
                        ))}
                    </Rating>
                    <SectionEnd>
                        {isClosedTemporarily && (
                        <Text variant="label" style={{ color: "red" }}>
                            CLOSED TEMPORARILY
                        </Text>
                        )}
                        <Spacer variant="left.large" />
                        {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
                        <Spacer variant="left.large" />
                        <Image style={{ width: 15, height: 15 }} source={{ uri: icon }} />
                    </SectionEnd>
                </Section>
                <Address>{address}</Address>
            </Info>
        </RestaurantCard>
    );
}