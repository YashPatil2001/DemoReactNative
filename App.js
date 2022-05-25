/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {StyleSheet, Text, View, ScrollView } from 'react-native';

export default function App() {
    const [people,setPeople] = useState([
      { name : 'Rupesh' , key:1},
      { name : 'Sagar' , key:2},
      { name : 'Nikita' , key:3},
      { name : 'Prashant' , key:4},
      { name : 'Niranjan' , key:5},
      { name : 'Madhura' , key:6},
      { name : 'Aryaa' , key:7},
      { name : 'Ronaldo', key:8}
    ])

  return (
    <View style={styles.container}>

      <ScrollView>
      {
        people.map((item) =>  (
            <View style={styles.item} key={item.key}>
               <Text style={styles.itemText}>{item.name}</Text>
             </View>
          )
        )
      }
    </ScrollView>
      
    </View>
  );
}

const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor:'#fff',
     paddingTop: 20,
     paddingHorizontal: 20
   },
   item: {
     padding: 30,
     marginTop: 30,
     backgroundColor: 'orange',
     fontSize: 50,
     color: 'white',
     borderRadius: 10
   },
   itemText: {
     color: 'white',
     fontWeight: 'bold'
   }
});
