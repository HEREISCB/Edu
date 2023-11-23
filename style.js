import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


export const customstyles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        marginTop: -80
      },
    textbox: {
        borderColor: 'black' , 
        borderWidth: 1,
        margin: 12,
        padding:10,
        height: 45,
        width: 300,
        borderRadius: 20,
        textAlignVertical: 'center',
        justifyContent: 'center'
    },
    cusbut: {
        borderColor: 'black' , 
        borderWidth: 0.5,
        elevation: 3,
        padding:10,
        height: 45,
        width: 300,
        borderRadius: 20,
        backgroundColor: "#2196F3",
        textAlign: 'center',
        justifyContent: 'center'
    }

})