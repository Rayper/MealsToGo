import React from "react";
import { CompactRestaurantInfo } from "../../../components/restaurant/compact-restaurant-info.component";

// create props retaurants untuk dipassing di map screen
export const MapCallout = ({ restaurant }) => (
    <CompactRestaurantInfo 
        isMap
        restaurant={restaurant}
    />
);