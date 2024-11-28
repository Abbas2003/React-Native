import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';


import { useColorScheme } from '@/hooks/useColorScheme';
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedButton } from '@/components/ThemedButton';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  // Div, span => <View>
  // p, h1-h6, bold, i => <Text>
  // list => <FlatList>, <SectionList>
  // button => <Pressable />, <TouchableOpacity />
  // for scroll => <ScrollView>
  // img => <Image />
  // input => <TextInput />
  
  return (
    <SafeAreaView style={styles.container}>
      {/* <View style={styles.header}>
        <Text><MaterialIcons name="menu" size={24} color="black" /></Text>
        <Text style={styles.text}>Logo here</Text>
        <Text><MaterialIcons name="notifications" size={24} color="black" /></Text>
      </View>
      <View>
        <Image source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-C_UAhXq9GfuGO452EEzfbKnh1viQB9EDBQ&s"}} width={500} height={300} />
      </View>
      <View>
        <Text>Our services</Text>
        <ThemedText type="subtitle" darkColor='blue' align='center'>Hello, world!</ThemedText>
      </View> */}

      <ThemedText type="title" align='center'>Welcome Screen!</ThemedText>

      <ThemedButton txt='Login With' txtColor='#000' my={10} bgColor='#eee' icon={<FontAwesome name="google" size={24} color="black" style={{marginLeft: 7}} />} />

      <ThemedButton txt='Login With' my={10} bgColor='#000' icon={<FontAwesome name="twitter" size={24} color="white" style={{marginLeft: 7}} />} />

      <ThemedButton txt='Login With' txtColor='#fff' my={10} bgColor='#3c3d3d' icon={<FontAwesome name="github" size={24} color="black" style={{marginLeft: 7}} />} />
      
      
    </SafeAreaView> 
  );
}

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingVertical: 17,
    paddingHorizontal: 10,
  },
  text : {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold'
  },
  imageStyles: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  }

})