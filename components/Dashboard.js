// components/Dashboard.js

import React from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';

const data = [
  { id: '1', title: 'Component 1', image: require('../assets/image1.png') },
  { id: '2', title: 'Component 2', image: require('../assets/image2.png') },
  { id: '3', title: 'Component 3', image: require('../assets/image3.png') },
  { id: '4', title: 'Component 4', image: require('../assets/image4.png') },
];

const Dashboard = () => {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.cardText}>{item.title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'orange',
  },
  list: {
    justifyContent: 'center',
  },
  card: {
    backgroundColor: 'black',
    borderRadius: 16, // Increase border radius for rounded corners
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 16, // Increase vertical margin for space between cards
    padding: 84, // Increase padding for larger cards
    flexDirection: 'row', // Arrange text and image horizontally
  },
  cardText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 12,
  },
  image: {
    width: 48,
    height: 48,
    resizeMode: 'contain',
  },
});

export default Dashboard;
