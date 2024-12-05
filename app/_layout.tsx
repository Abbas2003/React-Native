import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useCallback, useEffect, useState } from 'react';
import 'react-native-reanimated';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';


import { useColorScheme } from '@/hooks/useColorScheme';
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedButton } from '@/components/ThemedButton';
import { FlatList } from 'react-native-gesture-handler';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [categories, setCategories] = useState([])
  const [chosenCategory, setChosenCategory] = useState('All')
  const [limit, setLimit] = useState(null)
  const [total, setTotal] = useState(null)

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then((res) => res.json())
    .then((product) => {
      setProducts(product)
      setLoading(false)
    })
    .catch((err) => {
      console.error(err.message);
      setLoading(false)
    })
  }, [])


  const category = useCallback(() => {
    fetch('https://dummyjson.com/products/categories')
    .then(res => res.json())
    .then(cat => {
      setCategories(cat.data)
      setLoading(false)
    })
    .catch(err => {
      throw new Error(err.message)
      setLoading(false)
    })
  }, [categories])


  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  
  return (
   <Stack screenOptions={{ headerShown: false }} initialRouteName='index'>
      <Stack.Screen name='index' />
      <Stack.Screen name='login' />
      <Stack.Screen name='(tabs)' />
   </Stack>
  );
}