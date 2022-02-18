import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Alert, Button, Text, View, TextInput } from 'react-native';
import { useState } from 'react';
import {Picker} from '@react-native-picker/picker';
import RadioForm from 'react-native-simple-radio-button';
import styles from './Styles';
import Constants from 'expo-constants';
import RadioButton from './components/Radiobutton';
import { useFonts } from 'expo-font';

export default function App() {

  //state variables
  const [weight, setWeight] = useState(0);
  const [bottle, setBottle] = useState(1);
  const [time, setTime] = useState(1);
  const [gender, setGender] = useState('male');
  const [alcohol, setAlcohol] = useState('');

  //bottles
  const bottles = Array();
  bottles.push({label: '1 bottle', value: 1});
  for (let i = 2; i < 21; i++) {
    bottles.push({label: [i] + ' bottles', value: i})
  }

  //times
  const times = Array();
  times.push({label: '1 hour', value: 1});
  for (let i = 2; i < 25; i++) {
    times.push({label: [i] + ' hours', value: i})
  }

  //genders
  const genders = Array();
  genders.push({label: 'Male', value: 'male'});
  genders.push({label: 'Female', value: 'female'}); 

  //calculating
  function calculate() {
    let litres = bottle * 0.33;
    let grams = litres * 8 * 4.5;
    let burning = weight / 10;
    grams = grams - burning * time;
    let result = 0;
    if (gender === 'male') {
      result = grams / (weight * 0.7);
    }
    else {
      result = grams / (weight * 0.6);
    }
    
    //no negative results
    if (result < 0) {
      result = 0;
    }
    
    //alert
    if (weight === 0) {
      showAlert();
    }

    setAlcohol(result.toFixed(2));
  }

  //colours of result
  function colorOfResult () {
    if (alcohol < 0.01) {
      return "#008000"
    }
    else if (alcohol < 0.49 && alcohol > 0) {
      return "#ffff00"
    }
    else if (alcohol > 0.49) {
      return "#ff0000"
    }
  }

  //alert
  const showAlert = () => {
    Alert.alert(
      "Error",
      "Please enter weight.",
      [
        {
          text: "Ok",
        }
      ]
    );
  }

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
        <RadioButton genders={genders} onPress={(value) => {setGender(value)}} />
      </View>

      <Button 
      onPress={calculate} 
      color='#696969'
      title='Calculate'></Button>

      <View style={styles.field}>
        <Text style={styles.field, {fontWeight: 'bold', fontSize: 30, textAlign: 'center', color: colorOfResult()}}>{alcohol}</Text>
      </View>

      <StatusBar style="auto" />

    </View>
  );
}