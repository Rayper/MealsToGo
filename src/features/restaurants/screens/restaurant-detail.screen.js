import React from "react";

import { RestaurantInfoCard } from "../components/restaurant-info.component";

import { SafeArea } from "../../../components/utility/safe-area.component";

export const RestaurantDetailScreen = ({ route }) => {
    // set params untuk resto mana yang diklik
    // routes juga mendapatkan informasi mengenai restaurant-nya
    const { restaurant } = route.params;
    return (
        <SafeArea>
            <RestaurantInfoCard restaurant={restaurant} />
        </SafeArea>
    );
};