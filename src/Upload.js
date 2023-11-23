import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { customstyles } from '../style';

const FileUploadModule = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const pickDocument = async () => {
    // Implement file picking logic here
  };

  return (
    <View style={[customstyles.container, styles.container]}>
      <Text style={styles.title}>Welcome to Learnhub!</Text>
      <Text style={styles.subtitle}>Empower your teaching with Learnhub</Text>
      <TouchableOpacity style={styles.uploadButton} onPress={pickDocument}>
        <Text style={styles.buttonText}>Select File</Text>
      </TouchableOpacity>
      {selectedFile && (
        <View style={styles.selectedFileContainer}>
          <Text style={styles.selectedFileText}>
            Selected File: {selectedFile.name}
          </Text>
        </View>
      )}
    </View>
  );
};

const Upload = () => {
  return (
    <FileUploadModule />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    color: '#666',
  },
  uploadButton: {
    backgroundColor: '#3498db',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  selectedFileContainer: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#ecf0f1',
    borderRadius: 10,
  },
  selectedFileText: {
    fontSize: 16,
    color: '#333',
  },
});

export default Upload;
