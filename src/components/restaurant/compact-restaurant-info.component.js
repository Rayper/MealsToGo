import React from 'react'
import styled from 'styled-components'
import { restaurantsRequest } from '../../services/restaurants/restaurants.services';
import { Text } from '../typography/text.component';
import { Platform } from 'react-native'
import { WebView } from 'react-native-webview'

const CompactImage = styled.Image`
    border-radius: 10px;
    width: 120px;
    height: 100px;
`;

// ini untuk android supaya photosnya muncul
const CompactWebview = styled(WebView)`
    border-radius: 10px;
    width: 120px;
    height: 100px;
`;
const Item = styled.View`
    padding: 10px;
    max-width: 120px;
    align-items: center;
`;

const isAndroid = Platform.OS === "android"

export const CompactRestaurantInfo = ({ restaurant, isMap }) => {
    // kalau dia android dan isMap, pakai webview, kalau selain itu pakai compactimage
    const Image = isAndroid && isMap ? CompactWebview : CompactImage;

    return (
        <Item>
            <Image source={{ uri: restaurant.photos[0] }}/>
            <Text center variant="caption" numberOfLines={3}>
                {restaurant.name}
            </Text>
        </Item>
    )
}