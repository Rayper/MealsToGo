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

import { Navigation } from './src/infrastructure/navigation';

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

  return (
    <>
      <ThemeProvider theme={theme}>
        <LocationContextProvider>
          <RestaurantsContextProvider>
              <Navigation />
          </RestaurantsContextProvider>
        </LocationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}


