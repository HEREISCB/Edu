import { Button, StyleSheet, Text, TextInput, View, Alert, Modal, Pressable, Image } from 'react-native'
import React from 'react'
import { useState } from 'react';
import { customstyles } from '../style'
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { SafeAreaView } from 'react-native-safe-area-context';

url = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ldsliving.com%2Fwhat-the-church-has-said-about-suicide-comforting-answers-from-church-leaders%2Fs%2F88292&psig=AOvVaw0SxOuHKqxZH9SS68pNJaCc&ust=1693703405961000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCPiCsIHfioEDFQAAAAAdAAAAABAK'

const Flogin = ({navigation}) => {
  const [user, useris] = useState('');
  const [pass, passis] = useState('');
  // const [ModalVisible, setModalVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  
  return (
    <>
    <View style={customstyles.container}> 
      <Image style={{width: 400, height: 250, marginTop: -200, marginBottom: 20}} source={{uri: 'https://cdn.ldsliving.com/dims4/default/33b6400/2147483647/strip/true/crop/509x339+0+0/resize/509x339!/format/jpg/quality/90/?url=http%3A%2F%2Flds-living-brightspot.s3.amazonaws.com%2F27%2F0a%2Fcfb5d6e0aee070d6b29d5a67a2ca%2F44372.jpg'}} />
      <Text style={{fontSize: 18, fontFamily: 'monospace', margin: 5, textAlign: 'center' }}>Login </Text>
      <Text style={{fontSize: 12, fontFamily: 'monospace', marginBottom:10, width: 200, textAlign: 'center' }}>Using ID The and Password Provided By Your Faculty</Text>
     
      <TextInput style={customstyles.textbox} onChangeText={useris} value={user} placeholder='Username' />
      <TextInput style={customstyles.textbox} onChangeText={passis} value={pass} placeholder='Password' secureTextEntry = {true} />
      <View style= {{padding: 5}}>


       
      </View>
      
      <Pressable style={customstyles.cusbut} onPress={()=> {pascheck()}}>
        <Text style={{textAlign:'center', color: 'white', fontSize: 15}}>LOGIN</Text>
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
    <Text style={{fontSize: 12, fontFamily: 'monospace', marginBottom:10, width: 390,marginTop: 5, textAlign: 'center' }}>Seeing you on our app makes me sad, I know The sucidal thoughts you get after choosing engineering. contact +919820466726 in case you still have hopes</Text>

    </>
  )
  
function pascheck(){
  if(user == "Cb" || 'CB' && pass == "123"){
    navigation.navigate("Home")
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
