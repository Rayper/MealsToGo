import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Text } from "react-native";
import { SafeArea } from "../../components/utility/safe-area.component";
import { RestaurantsNavigator } from './restaurants.navigator'
import { MapScreen } from '../../features/map/screen/map.screen'

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

const createScreenOptions = ({ route }) => {
    const iconName = TAB_ICON[route.name];
    return {
        tabBarActiveTintColor: "#6cb221",
        tabBarInactiveTintColor: "darkgrey",
        tabBarStyle: [
            {
                display: "flex"
            }
        ],
        headerShown: false,
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
            <Tab.Screen name='Restaurants' component={RestaurantsNavigator} options={{ tabBarBadge: 1 }} />
            <Tab.Screen name='Map' component={MapScreen} />
            <Tab.Screen name='Settings' component={Settings} options={{ tabBarBadge: 2 }}/>
        </Tab.Navigator>
    </NavigationContainer>
);