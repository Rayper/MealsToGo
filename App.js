import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { RestarantScreen } from './src/features/restaurants/screens/restaurants.screen';

export default function App() {
  return (
    <>
      <RestarantScreen />
      <ExpoStatusBar style="auto" />
    </>
  );
}


