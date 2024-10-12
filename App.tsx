import React, { useEffect , useState } from 'react';
import { View, Text , StyleSheet , Alert, Pressable, Dimensions } from 'react-native';
import * as Clipboard from 'expo-clipboard';
import * as Device from 'expo-device';

export default function App() {

  
  // Button Press Actions
  const onPressHandler = async () => {
    if (ip !== null) {
      await Clipboard.setStringAsync(ip);
  }};
  const onPressHandler_os = async () => {
    if (Device.osName !== null) {
      await Clipboard.setStringAsync(Device.osName);
  }};




  // Fetch And Show Of IP Address 
  const [ip, setIp] = useState('Fetching IP...');
  const fetchIp = async () => {
    try {
      const response = await fetch('https://api.ipify.org?format=json');
      const data = await response.json();
      setIp(data.ip);
    } catch (error) {
      console.log("Error Code (Sent It To Me DrPanayioths On Discord): " + error);
    }
  };

  
  useEffect(() => {
    fetchIp();
  });

  



  // Dimensions Get

  const { width, height } = Dimensions.get('window');
  const Width_final = Math.floor(width);
  const intHeight_final = Math.floor(height);
  


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pnet By DrPanayioths</Text>
  
      <View style={styles.rowContainer}>
        <Pressable style={styles.graybox} onPress={onPressHandler}>
          <Text style={styles.boxes}>Your IP Address:</Text>
          <Text style={styles.values}>{ip}</Text>
        </Pressable>
  
        <Pressable style={styles.graybox} onPress={onPressHandler_os}>
          <Text style={styles.boxes}>OS Name:</Text>
          <Text style={styles.values_os}>{Device.osName}</Text>
        </Pressable>
        </View>

        <View style={{ marginTop: 10}}>
          <Pressable style={styles.graybox}>
            <Text style={styles.boxes}>Screen Dimensions:</Text>
            <Text style={styles.values}>{intHeight_final} X {Width_final}</Text>
          </Pressable>
        </View>
  
    </View>
  )};
  

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: "black",
    },
    title: {
      color: "white",
      fontSize: 30,
      fontWeight: "bold",
      textAlign: 'center',
      marginBottom: 20,
    },
    rowContainer: {
      flexDirection: 'row',  // Box Side By Side
      justifyContent: 'space-between',  // Space Between
      alignItems: 'center',  // Centers vertically
      width: '100%',  // Adjust this to control width of the container
      alignSelf: 'center',  // Centers the row container on the screen
      marginTop: 20,
    },
    graybox: {
      width: 200,
      height: 100,
      backgroundColor: 'gray',
      justifyContent: 'center',
      alignItems: 'center',  // Center content horizontally
      borderRadius: 30,
    },
    boxes: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 16,
      marginBottom: 10,
    },
    values: {
      color: 'white',
      fontSize: 20,
      
    },
    values_os: {
      color: 'white',
      fontSize: 13,
    },
  });
  
