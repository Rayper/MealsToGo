import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { RestaurantScreen } from './src/features/restaurants/screens/restaurants.screen';
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import { Text } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { useFonts as useOswald, Oswald_400Regular } from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import { Ionicons } from "@expo/vector-icons";

import { SafeArea } from './src/components/utility/safe-area.component';

import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context"
import { LocationContextProvider } from './src/services/location/location.context'

const Tab = createBottomTabNavigator();

const TAB_ICONS = {
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


export default function App() {
  // untuk load si font oswald dan lato
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  // jika font oswald dan lato gak ada, return null
  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  const createScreenOptions = ({route}) => {
    const iconName = TAB_ICONS[route.name]
    return {
      tabBarActiveTintColor: "#6cb221",
      tabBarInactiveTintColor: "darkgrey",
      tabBarIcon: ({size, color}) =>(
        <Ionicons name={iconName} size={size} color={color} />
      )
    }
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <LocationContextProvider>
          <RestaurantsContextProvider>
            <NavigationContainer>
              <Tab.Navigator screenOptions={createScreenOptions}>
                <Tab.Screen name='Restaurants' component={RestaurantScreen} options={{ tabBarBadge: 1 }} />
                <Tab.Screen name='Map' component={Map} />
                <Tab.Screen name='Settings' component={Settings} options={{ tabBarBadge: 2 }}/>
              </Tab.Navigator>
            </NavigationContainer>
          </RestaurantsContextProvider>
        </LocationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}


