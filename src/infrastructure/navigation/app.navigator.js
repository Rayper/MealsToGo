import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Text } from "react-native";

import { RestaurantScreen } from "../../features/restaurants/screens/restaurants.screen";
import { SafeArea } from "../../components/utility/safe-area.component";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
    Restaurants: "md-restaurant",
    Map: "md-map",
    Settings: "md-settings",
};

const Settings = () => (
    <SafeArea>
        <Text>Settings</Text>
    </SafeArea>
);
const Map = () => (
    <SafeArea>
        <Text>Map</Text>
    </SafeArea>
);

const createScreenOptions = ({ route }) => {
    const iconName = TAB_ICON[route.name];
    return {
        tabBarActiveTintColor: "#6cb221",
        tabBarInactiveTintColor: "darkgrey",
        tabBarIcon: ({ size, color }) => (
        <Ionicons name={iconName} size={size} color={color} />
        ),
    };
};

export const AppNavigator = () => (
    <NavigationContainer>
        <Tab.Navigator
            screenOptions={createScreenOptions}
        >
            <Tab.Screen name='Restaurants' component={RestaurantScreen} options={{ tabBarBadge: 1 }} />
            <Tab.Screen name='Map' component={Map} />
            <Tab.Screen name='Settings' component={Settings} options={{ tabBarBadge: 2 }}/>
        </Tab.Navigator>
    </NavigationContainer>
);