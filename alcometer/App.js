import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { useFonts } from 'expo-font';
import { useState } from 'react';
import {Picker} from '@react-native-picker/picker';
import RadioForm from 'react-native-simple-radio-button';

export default function App() {

  //state variables
  const [weight, setWeight] = useState(0);
  const [bottle, setBottle] = useState(1);
  const [time, setTime] = useState(1);
  const [gender, setGender] = useState('male');
  const [alcohol, setAlcohol] = useState(0);

  //bottles
  const bottles = Array();
  bottles.push({label: '1 bottle', value: 1});
  bottles.push({label: '2 bottles', value: 2});
  bottles.push({label: '3 bottles', value: 3});
  bottles.push({label: '4 bottles', value: 4});
  bottles.push({label: '5 bottles', value: 5});

  //times
  const times = Array();
  times.push({label: '1 hour', value: 1});
  times.push({label: '2 hours', value: 2});
  times.push({label: '3 hours', value: 3});
  times.push({label: '4 hours', value: 4});
  times.push({label: '5 hours', value: 5});

  //genders
  const genders = Array();
  genders.push({label: 'Male', value: 'male'});
  genders.push({label: 'Female', value: 'female'});


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

      <View style={styles.field}>
        <Text style={{fontWeight: 'bold'}}>Weight</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => setWeight(text)}
          placeholder='Enter weight in kilograms'
          keyboardType='numeric'></TextInput>
      </View>

      <View style={styles.field}>
        <Text style={{fontWeight: 'bold'}}>Bottles</Text>
        <Picker style={styles.bottle}
          onValueChange={(itemValue) => setBottle(itemValue)}
          selectedValue={bottle}>
          {bottles.map((bottle,index) => (
            <Picker.Item key={index} label={bottle.label} value={bottle.value}/>
          ))}
        </Picker>
      </View>

      <View style={styles.field}>
        <Text style={{fontWeight: 'bold'}}>Time</Text>
        <Picker style={styles.time}
          onValueChange={(itemValue) => setTime(itemValue)}
          selectedValue={time}>
          {times.map((time,index) => (
            <Picker.Item key={index} label={time.label} value={time.value}/>
          ))}
        </Picker>
      </View>

      <View style={styles.field}>
        <Text style={{fontWeight: 'bold'}}>Gender</Text>
        <RadioForm
          style={styles.radio}
          buttonSize={10}
          radio_props={genders}
          initial={0}
          onPress={(value) => {setGender(value)}}/>
      </View>

      <StatusBar style="auto" />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  header: {
    fontFamily: 'Rowdies',
    fontSize: 30,
    color: '#696969',
    marginBottom: 15
  },
  input: {
    marginLeft: 10
  },
});
