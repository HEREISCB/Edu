import { StyleSheet, Text, View, Image,   } from 'react-native'
import { useIsFocused } from '@react-navigation/native';
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Register from './register';
import { customstyles } from '../style';
import Upload from './Upload';
import ChatBot from './student';
import Homec from './Homec';
import { useRoute } from '@react-navigation/native';



const Bottabs = createBottomTabNavigator();
const Bottab = () => {
  const isFocused = useIsFocused();
  const route = useRoute()
  const checkbox = route.params?.checkboxis
  if (checkbox == true){
    return (

      <Bottabs.Navigator screenOptions={{tabBarStyle:{position: 'absolute', elevation: 2,bottom: 15, borderRadius: 55, marginHorizontal: 12,  height: 60, paddingBottom: 2}, headerShown: false }} >
          
          <Bottabs.Screen options={{tabBarIcon:()=>(<View >
            <Image style={{width: 50, height: 50,  bottom: 2}} source={require('./home.png')} />
          </View>) } } styles name='HOME' component={Homec}/>
          
          <Bottabs.Screen name='Upload Notes' component={Upload}/>
          <Bottabs.Screen name='Student' component={ChatBot}/>
      </Bottabs.Navigator>
    )
  }
  else{
    return (

      <Bottabs.Navigator screenOptions={{tabBarStyle:{position: 'absolute', elevation: 2,bottom: 15, borderRadius: 55, marginHorizontal: 12,  height: 60, paddingBottom: 2}, headerShown: false }} >
          
          <Bottabs.Screen options={{tabBarIcon:()=>(<View >
            <Image style={{width: 50, height: 50,  bottom: 2}} source={require('./home.png')} />
          </View>) } } styles name='HOME' component={Homec}/>
          
          {/* <Bottabs.Screen name='acba' component={Upload}/> */}
          <Bottabs.Screen name='Student' component={ChatBot}/>
      </Bottabs.Navigator>
    )

    
  }
  
}
export default Bottab;

const styles = StyleSheet.create({})