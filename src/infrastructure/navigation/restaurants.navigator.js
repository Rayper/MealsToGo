import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import { RestaurantScreen } from "../../features/restaurants/screens/restaurants.screen";

const RestaruantStack = createStackNavigator();

export const RestaurantsNavigator = () => {
    return (
        <RestaruantStack.Navigator headerMode="none">
            <RestaruantStack.Screen 
                name="Restaurants List"
                component={RestaurantScreen}
            />
        </RestaruantStack.Navigator>
    )
}