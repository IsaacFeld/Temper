import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react'
import { Stack } from "expo-router";
SplashScreen.preventAutoHideAsync();
export default function RootLayout() {
  const [loaded, error] = useFonts({
    'CherryBomb': require('../assets/fonts/CherryBombOne-Regular.ttf'),
    'Sour': require('../assets/fonts/SourGummy-VariableFont_wdth,wght.ttf')
  });
  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }
  else{
    return <Stack>
    <Stack.Screen name="index"options={{headerShown: false}}>
    </Stack.Screen>
  </Stack>;
  }

}
