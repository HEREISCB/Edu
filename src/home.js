import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { customstyles } from '../style'
import Bottab from './bottab'
import { useRoute } from '@react-navigation/native'



const Home = ( navigation) => {
  const route = useRoute()
  const isFaculty = route.params?.isFaculty
  
  
    return (
      <>
      <Text>
         </Text>
        <Bottab />
      </>
  )

}

export default Home

const styles = StyleSheet.create({})