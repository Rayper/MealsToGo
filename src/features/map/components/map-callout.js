import React from "react";
import styled from "styled-components/native";

const MyText = styled.Text``;


// create props retaurants untuk dipassing di map screen
export const MapCallout = ({ restaurant }) => (
    <MyText>{restaurant.name}</MyText>
);