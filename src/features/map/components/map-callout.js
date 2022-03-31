import React from "react";
import styled from "styled-components/native";
import { CompactRestaurantInfo } from "../../../components/restaurant/compact-restaurant-info.component";

const MyText = styled.Text``;


// create props retaurants untuk dipassing di map screen
export const MapCallout = ({ restaurant }) => (
    <CompactRestaurantInfo 
        restaurant={restaurant}
    />
);