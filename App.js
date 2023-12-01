import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Src/Screens/HomeScreen';
import Matematik from './Src/Screens/Matematik';
import FenBilgisi from './Src/Screens/FenBilgisi';
import Türkçe from './Src/Screens/Türkçe';
import Sosyal from './Src/Screens/SosyalBilgiler';



const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Matematik" component={Matematik} />
        <Stack.Screen name="Fen Bilgisi" component={FenBilgisi} />
        <Stack.Screen name="Sosyal Bilgi" component={Sosyal} />
        <Stack.Screen name="Türkçe" component={Türkçe} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  
});
