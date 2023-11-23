import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { readConversationFromJson, sendMessage } from './conversationManager';
// import {API_KEY} from '@env';

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const apiKey = '';
  const apiUrl = 'https://api.openai.com/v1/chat/completions';


  useEffect(() => {
    readConversationFromJson();
  }, []);



  const sendMessage = async () => {
    if (inputMessage.trim() === '') return;
    const userMessage = { text: inputMessage, user: 'user' };
    // Add the user message to the messages state
    setMessages(prevMessages => [...prevMessages, userMessage]);
    setInputMessage('');

    const conversation = [
      { role: 'system', content: 'Simulate the behavior of a patient, knowledgeable, and encouraging teacher. Provide clear and friendly responses to student questions, tailor explanations based on the students grade and understanding, offer subject-specific tips for improvement, recommend diverse and updated study resources, and always prioritize the security and privacy of student information, Your name is Learnhub ai, you are created by CBseries. do not use openai or chatgpt in the convertation' },
      {role :'assistant', content: 'this is the previous convertation'},
      { role: 'user', content: inputMessage },
    ];

    // Send user message to OpenAI API
    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo-0301', 
        messages: conversation,
        max_tokens: 50, // Adjust as needed
      }),
    })
      .then(response => response.json())
      .then(data => {
        console.log("openai response", data);
        const botMessage = { text: data.choices[0].message.content, user: 'bot' };

        // Add the AI's response to the messages state
        setMessages(prevMessages => [...prevMessages, botMessage]);
      })
      .catch(error => console.error('Error sending message to OpenAI:', error));
  };

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={messages}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View
            style={{
              alignSelf: item.user === 'user' ? 'flex-end' : 'flex-start',
              backgroundColor: item.user === 'user' ? '#007AFF' : '#EEE',
              borderRadius: 5,
              margin: 5,
              padding: 10,
            }}>
            <Text style={{ color: item.user === 'user' ? 'white' : 'black' }}>
              {item.text}
            </Text>
          </View>
        )}
      />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          padding: 10,
          bottom: 60,
          margin: 20
        }}>
        <TextInput
          style={{ flex: 1, borderColor: 'gray', borderWidth: 1, borderRadius: 5, padding: 10 }}
          placeholder="Type your message..."
          value={inputMessage}
          onChangeText={text => setInputMessage(text)}
        />
        <TouchableOpacity
          style={{ marginLeft: 10, padding: 10, backgroundColor: '#007AFF', borderRadius: 5 }}
          onPress={sendMessage}>
          <Text style={{ color: 'white' }}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChatBot;