/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React,{useState} from 'react';
 import { StyleSheet, Text, View, Button} from 'react-native';
 
 export default function App() {
   const [name,setName] = useState('Yash')
   const [person,setPerson] = useState({ name:'Dip Patil' , age:20})
   

  const onUpdate = () => {
     setName('Madhu')
   }
 
 const onUpdatePerson = () => {
   setPerson({
     name: 'Aryaa',
     age: '30'
   })
 }  
   return (
     <View style={styles.container}>
        <Text>My Name is {name}</Text>
        <Text>Hist Name is {person.name} and his age is {person.age}</Text>
        <View style={styles.btnContainer}>
           <Button title='Update name' onPress={onUpdate}/>
        </View>
        <View style={styles.btnContainer}>
           <Button title='Set person' onPress={onUpdatePerson}/>
        </View>
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
       marginTop: 20
   }
 });