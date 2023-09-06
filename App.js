import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import login from './src/login';
import register from './src/register';
import Flogin from './src/login';
import Register from './src/register';
import Home from './src/home';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer >
    <Stack.Navigator >
      <Stack.Screen name = "Login" component={Flogin} options={{title: "Edu", animation: 'slide_from_right', statusBarAnimation: 'fade',  }} />
      <Stack.Screen name = "Register" component={Register} options={{title: "Registration", animation: 'slide_from_right', animationDuration: '550' }} />
      <Stack.Screen name = "Home" component={Home} options={{title: "EDU", animation: 'slide_from_right', animationDuration: '550' }} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
