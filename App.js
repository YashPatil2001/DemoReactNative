/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {StyleSheet, Text, View, Button, TextInput} from 'react-native';

export default function App() {
  const [name, setName] = useState('Yash');
  const [age, setAge] = useState(10);


  return (
    <View style={styles.container}>

      <Text>Enter Name:</Text>
      <TextInput style={styles.input}
                 placeholder="e.g.Indira"
                 keyboardType='text'
                 onChangeText={(val) => setName(val)}/>
      
      <Text>Enter Age:</Text>
      <TextInput style={styles.input}
                 placeholder="e.g.20" 
                 keyboardType='numeric'
                 onChangeText={(val) => setAge(val)} />
      <Text>
        Name : {name} Age : {age}
      </Text>
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
  btnContainer: {
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
  },
});
