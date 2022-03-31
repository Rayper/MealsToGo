import React from 'react'

import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'
import { RestaurantScreen } from "../../features/restaurants/screens/restaurants.screen";
import { RestaurantDetailScreen } from "../../features/restaurants/screens/restaurant-detail.screen";

const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = () => {
    return (
        <RestaurantStack.Navigator 
            screenOptions={{ 
                // ga nampilin headernya
                headerMode: "false",
                // animasinya swipe up
                ...TransitionPresets.ModalPresentationIOS
            }}
        >
            <RestaurantStack.Screen 
                name="Restaurants List"
                component={RestaurantScreen}
            />
            <RestaurantStack.Screen
                name="RestaurantDetail"
                component={RestaurantDetailScreen}
            />
        </RestaurantStack.Navigator>
    )
}