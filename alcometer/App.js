import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';

export default function App() {

  //header
  const [loaded] = useFonts({
    Rowdies: require('./assets/fonts/Rowdies-Bold.ttf'),
  });
  
  if (!loaded) {
    return null;
  }


  return (
    <View style={styles.container}>
      <Text style={styles.header}>Alcometer</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontFamily: 'Rowdies',
    fontSize: 30,
    color: '#696969',
    marginBottom: 15
  },
});
