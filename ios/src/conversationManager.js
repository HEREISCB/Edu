import * as FileSystem from 'expo-file-system';

let conversation = [];

async function createConversationFile() {
    const filePath = 'conversation.json';
  
    try {
      // Check if the file already exists
      const fileInfo = await FileSystem.getInfoAsync(filePath);
  
      if (!fileInfo.exists) {
        // Create the file and initialize it with an empty array
        await FileSystem.writeAsStringAsync(filePath, '[]');
        console.log('conversation.json created successfully.');
      }
    } catch (error) {
      console.error('Error creating conversation.json:', error);
    }
  }
async function saveConversationToJson() {
  try {
    const jsonContent = JSON.stringify(conversation, null, 2);
    await FileSystem.writeAsStringAsync('conversation.json', jsonContent);
  } catch (error) {
    console.error('Error saving conversation to JSON file:', error);
  }
}

async function readConversationFromJson() {
    try {
      const fileInfo = await FileSystem.getInfoAsync('conversation.json');
  
      if (fileInfo.exists) {
        const jsonContent = await FileSystem.readAsStringAsync('conversation.json');
        conversation = JSON.parse(jsonContent);
      } else {
        console.warn('conversation.json does not exist.');
      }
    } catch (error) {
      console.error('Error reading conversation from JSON file:', error);
    }
  }
  

function sendMessage(message, role) {
  const newMessage = { role, content: message };
  conversation.push(newMessage);
  saveConversationToJson();
}

export { readConversationFromJson, sendMessage };
