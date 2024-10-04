import React, { useEffect , useState } from 'react';
import { View, Text , StyleSheet , Alert, Pressable } from 'react-native';


export default function App() {
  // Button Press Actions
  const onPressHandler = () => {
    Alert.alert('Button Pressed!');
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









  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pnet By DrPanayioths</Text>

      <Pressable style={styles.graybox} onPress={onPressHandler}>
        <Text style={styles.boxes}>Your IP Address:</Text>
        <Text style={styles.values}>{ip}</Text>
      </Pressable>


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
