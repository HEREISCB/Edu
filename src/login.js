import { Button, StyleSheet, Text, TextInput, View, Alert, Modal, Pressable, Image, } from 'react-native'
import { useRoute } from '@react-navigation/native';
import React from 'react'
import { useState } from 'react';
import { customstyles } from '../style'
import BouncyCheckbox from "react-native-bouncy-checkbox";
import codegenNativeCommands from 'react-native/Libraries/Utilities/codegenNativeCommands';




const Flogin = ({navigation}) => {
  const [user, useris] = useState('');
  const [pass, passis] = useState('');
  // const [ModalVisible, setModalVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [checkbox, setcheckbox] = useState(false)
  function iffacylty(){
    if (checkbox==true){
     
      return(
        <Text>Yes faculty</Text>)
    }
    }
  
  return (
    <>
    <View style={customstyles.container}> 
    
      <Image style={{width: 400, height: 250, marginTop: -70, marginBottom: 20}} source={{uri: 'https://sgipolytechnic.in/static/media/Dblock.03234074.jpg'}} />
      <Text style={{fontSize: 18, fontFamily: 'monospace', margin: 5, textAlign: 'center' }}>Login </Text>
      <Text style={{fontSize: 12, fontFamily: 'monospace', marginBottom:10, width: 200, textAlign: 'center' }}>Using ID The and Password Provided By Your Faculty</Text>
     
      <TextInput style={customstyles.textbox} onChangeText={useris} value={user} placeholder='Username' />
      <TextInput style={customstyles.textbox} onChangeText={passis} value={pass} placeholder='Password' secureTextEntry = {true} />
      <BouncyCheckbox text='Faculty?' textStyle={{
  textDecorationLine: "none",
}}
 onPress={() => setcheckbox(!checkbox)}/> 
 {iffacylty()}

      <View style= {{padding: 5, paddingBottom: 10}}>


       
      </View>
      
      <Pressable style={customstyles.cusbut} onPress={()=> {pascheck()}}>
        <Text style={{textAlign:'center', color: 'white', fontSize: 15}}>LOGIN</Text>
      </Pressable>
      <View style={{marginBottom: 25}}>

      </View>
      <Pressable style={customstyles.cusbut} onPress={()=> {pascheck()}}>
        <Text style={{textAlign:'center', color: 'white', fontSize: 15,}}>Register</Text>
      </Pressable>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Use the button on the screen next time ok?');
          setModalVisible(!modalVisible);
        }}>
<View style={styles.centeredView}>

        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            
            <Image style={{margin:5, overflow: 'hidden'}} source={require('../assets/cat1.gif')} />
            <Text style={styles.modalText}>Who are you?</Text>
            <Text style={styles.modalText}>Incorrect Username or password</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Retry login</Text>
            </Pressable>
          </View>
        </View>

    </View>
      </Modal>
      </View>
    
    <Text style={{fontSize: 12, fontFamily: 'monospace', marginBottom:10, width: 390,marginTop: 5, textAlign: 'center' }}>Welcome to Learnhub! Elevate your study game with AI-powered learning. 🚀 Your path to success begins here!</Text>

    </>
  )

function pascheck(){
  if(user == "Cb" || 'CB' && pass == "123"){
    navigation.navigate("Home", {checkboxis: checkbox})
  }
  else{
    setModalVisible(true)

  }

}
}

export default Flogin

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    
    borderRadius: 30,
    paddingHorizontal: 35,
    paddingVertical: 15,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  
  });
