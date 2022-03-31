import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import 'react-native-gesture-handler';
import { useFonts as useOswald, Oswald_400Regular } from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";


import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context"
import { LocationContextProvider } from './src/services/location/location.context'
import { FavouritesContextProvider } from './src/services/favourites/favourites.context';

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
        <FavouritesContextProvider>
          <LocationContextProvider>
            <RestaurantsContextProvider>
              <Navigation />
            </RestaurantsContextProvider>
          </LocationContextProvider>
        </FavouritesContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}


