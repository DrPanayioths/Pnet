import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export default function App() {
  const onPressHandler = () => {
    Alert.alert('Button Pressed!');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pnet By DrPanayioths</Text>

      <TouchableOpacity style={styles.graybox} onPress={onPressHandler}>
        <Text style={styles.boxes}>Your IP Address:</Text>
        <Text style={styles.values}>192.168.1.0</Text>
      </TouchableOpacity>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "black",
  },
  title: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 50,
  },
  graybox: {
    width: 250,
    height: 100,
    backgroundColor: 'gray',
    marginRight: 150,
    marginTop: 20,
    justifyContent: 'center', // Center text vertically in the box
    alignItems: 'center', // Center text horizontally in the box
    borderRadius: 30,
  },
  boxes: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 30,
  },
  values: {
    color: 'white',
    fontSize: 25,
  },

});
