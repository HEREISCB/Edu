import { View, Text } from 'react-native'
import React from 'react'
import { customstyles } from '../style'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
// import { useNavigation } from 'expo-router';

export default function Register({navigation, route}) {
  // const {User, pass} = route.params;
  // const navigation = useNavigation() 
  return (
    <View style = {customstyles.container}>
      <Text>register user CB  and password is idk </Text>
    </View>
  )
}