// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './component/Home';
import Signup from '././component/Singup';
import Login from './component/Login';
import SignIn from './component/SignIn'
import SearchBar from './component/SearchBar';
import Cards from './component/Cards';
import Footer from './component/Footer';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{ title: 'Home' }} />
        <Stack.Screen name="Cards" component={Cards} options={{ title: 'Cards' }} />
        <Stack.Screen name="SearchBar" component={SearchBar} option={{title: 'SearchBar'}} />
        <Stack.Screen name="Signup" component={Signup} options={{ title: 'Signup' }} />
        <Stack.Screen name="Login" component={Login} options={{ title: 'Login' }} />
        <Stack.Screen name="SignIn" component={SignIn} options={{ title: 'SignIn' }} />
        <Stack.Screen name="Footer" component={Footer} options={{ title: 'Footer' }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
