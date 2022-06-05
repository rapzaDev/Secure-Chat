import React, { useEffect } from 'react';
import { ThemeProvider, useTheme } from 'styled-components/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as NavigationBar from 'expo-navigation-bar';
// import AppLoading from 'expo-app-loading';
// import {
  //   useFonts,
  //   <font_name>_400Regular,
  //   <font_name>_500Medium,
  //   <font_name>_700Bold
  // } from '@expo-google-fonts/<font_name>';
  
import theme from './src/global/styles/';
  
export default function App() {

  function t() {
    const visibility = NavigationBar.useVisibility();

    useEffect(() => {
        async function setStatusBarVisibility() {
            await NavigationBar.setBehaviorAsync('overlay-swipe');
            await NavigationBar.setVisibilityAsync('hidden');
        } 

        setStatusBarVisibility();
    },[visibility])
  }

  t();

//   const [ fontsLoaded ] = useFonts({
//     <font_name>_400Regular,
//     <font_name>_500Medium,
//     <font_name>_700Bold
//  }); 
// if (!fontsLoaded) return <AppLoading />


  return (
    <ThemeProvider theme={theme}>
    <View style={styles.container}>
      <StatusBar hidden />
      <Text>Template with Typescript</Text>
    </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3EFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
