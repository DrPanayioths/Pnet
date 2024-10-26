import React, { useEffect , useState } from 'react';
import { View, Text , StyleSheet , Pressable, Dimensions } from 'react-native';
import * as Clipboard from 'expo-clipboard';
import * as Device from 'expo-device';
import * as Network from 'expo-network';

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

  const onPressHandler_network = async () => {
    if (networkInfo !== null) {
      await Clipboard.setStringAsync(networkInfo);
    }
  };




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


  // Network Information
  const [networkInfo, setNetworkInfo] = useState('Fetching network info...');
  const fetchNetworkInfo = async () => {
    try {
      const netInfo = await Network.getNetworkStateAsync();
      if (netInfo.isConnected) {
        setNetworkInfo(`${netInfo.type} - ${netInfo.isInternetReachable ? 'Internet reachable' : 'No internet'}`);
      } else {
        setNetworkInfo('Not connected');
      }
    } catch (error) {
      console.log("Error Code (Sent It To Me DrPanayioths On Discord): " + error);
    }
  };
  useEffect(() => {
    fetchNetworkInfo();
  }, []);

  



  // Dimensions Get

  const { height, width } = Dimensions.get('window');
  const intHeight_final = Math.floor(height);
  const Width_final = Math.floor(width);
  


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
          <Text style={[styles.values, { fontSize: 13 }]}>{Device.osName}</Text>
        </Pressable>
      </View>

      <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
        <Pressable style={styles.graybox}>
          <Text style={styles.boxes}>Screen Dimensions:</Text>
          <Text style={[styles.values]}>{intHeight_final} X {Width_final}</Text>
        </Pressable>

        <Pressable style={styles.graybox} onPress={onPressHandler_network}>
          <Text style={styles.boxes}>Network Info:</Text>
          <Text style={[styles.values, { fontSize: 15 }, { textAlign: 'center' }]}>{networkInfo}</Text>
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
      alignItems: 'center',
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
  });
  
