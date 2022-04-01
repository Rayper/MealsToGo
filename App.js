import React, { useState, useEffect } from 'react'
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { ThemeProvider } from "styled-components/native";
import 'react-native-gesture-handler';

import { useFonts as useOswald, Oswald_400Regular } from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context"
import { LocationContextProvider } from './src/services/location/location.context'
import { FavouritesContextProvider } from './src/services/favourites/favourites.context';

import { theme } from "./src/infrastructure/theme";

import firebase from 'firebase/compat';
import { AuthenticationContextProvider } from './src/services/authentication/authentication.context';
import { Navigation }  from './src/infrastructure/navigation/index';


// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCWSGqFX8ttL3sYAi7nsjerqzyUd1V4JAo",
  authDomain: "mealstogo-3f45c.firebaseapp.com",
  projectId: "mealstogo-3f45c",
  storageBucket: "mealstogo-3f45c.appspot.com",
  messagingSenderId: "111887979094",
  appId: "1:111887979094:web:85ce8ddd45f27137ac61f7"
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig)
}

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
        <AuthenticationContextProvider>
          <FavouritesContextProvider>
            <LocationContextProvider>
              <RestaurantsContextProvider>
                <Navigation />
              </RestaurantsContextProvider>
            </LocationContextProvider>
          </FavouritesContextProvider>
        </AuthenticationContextProvider>  
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}


