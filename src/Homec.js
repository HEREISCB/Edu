import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

export default function Homec({ navigation }) {
  const data = [
    // {
    //   key: '1',
    //   title: 'Welcome to Learnhub!',
    //   subtitle: 'Stay connected with our news and important notifications.',
    // },
    {
      key: '2',
      title: 'View News',
      onPress: () => navigation.navigate('News'), // Update the screen name accordingly
    },
    {
      key: '3',
      title: 'View Updates',
      onPress: () => navigation.navigate('Updates'), // Update the screen name accordingly
    },
    {
      key: '4',
      title: 'View Notes',
      onPress: () => navigation.navigate('Notes'), // Update the screen name accordingly
    },
    {
      key: '5',
      title: 'View Important Events',
      onPress: () => navigation.navigate('ImportantEvents'), // Update the screen name accordingly
    },
    // Additional grids
    {
      key: '6',
      title: 'Explore Resources',
      onPress: () => console.log('Grid 6 pressed'),
    },
    {
      key: '7',
      title: 'Discover Courses',
      onPress: () => console.log('Grid 7 pressed'),
    },
    // {
    //   key: '8',
    //   title: 'Grid 8',
    //   onPress: () => console.log('Grid 8 pressed'),
    // },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.gridItem}
      onPress={item.onPress}>
      <Text style={styles.gridTitle}>{item.title}</Text>
      {item.subtitle && <Text style={styles.gridSubtitle}>{item.subtitle}</Text>}
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.heading}>Welcome to Learnhub!</Text>
        <Text style={styles.subheading}>Stay connected with our news and important notifications.</Text>
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.key}
        contentContainerStyle={styles.gridContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  headerContainer: {
    marginBottom: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
    textAlign: 'center',
  },
  subheading: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
  gridContainer: {
    justifyContent: 'space-around',
    alignItems: 'stretch',
  },
  gridItem: {
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center', shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4, 
  },
  gridTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
  gridSubtitle: {
    fontSize: 14,
    color: 'black',
    textAlign: 'center',
  },
});
