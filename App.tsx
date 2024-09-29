import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <Text style={styles.pnet_title}>Pnet By DrPanayioths</Text>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
  },
  pnet_title: {
    color: "black",
    fontSize: 30,
    fontWeight: "bold",
    top: 30,
    left: 60,

  }
});
