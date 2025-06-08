import { Slot } from 'expo-router';
import { SafeAreaView } from 'react-native';
import { useFonts } from 'expo-font';
import { View, Text } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

SplashScreen.preventAutoHideAsync();

export default function Layout() {
  const [fontsLoaded] = useFonts({
    'Poppins-Bold': require('@/assets/fonts/Poppins/Poppins-Bold.ttf'), // Relative path
    'Prata': require('@/assets/fonts/Prata/Prata-Regular.ttf'), // Relative path
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Slot />
    </SafeAreaView>
  );
}
