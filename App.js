/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';

export default function App() {
    const [people,setPeople] = useState([
      { name : 'Rupesh' , ID:1},
      { name : 'Sagar' , ID:2},
      { name : 'Nikita' , ID:3},
      { name : 'Prashant' , ID:4},
      { name : 'Niranjan' , ID:5},
      { name : 'Madhura' , ID:6},
      { name : 'Aryaa' , ID:7},
      { name : 'Ronaldo', ID:8}
    ])

  return (
    <View style={styles.container}>

    <FlatList 
      //  numColumns={2}
       keyExtractor={ (item) => item.ID}
       data={people}
       renderItem={({ item }) => (
        <View style={styles.item} key={item.key}>
               <Text style={styles.itemText}>{item.name}</Text>
             </View>
       )}
     />

     {/* <ScrollView>
      {
        people.map(item =>  (
            <View style={styles.item} key={item.key}>
               <Text style={styles.itemText}>{item.name}</Text>
             </View>
          )
        )
      }
    </ScrollView>*/}
      
    </View>
  );
}

const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor:'#fff',
     paddingTop: 10,
     paddingHorizontal: 20
   },
   item: {
     padding: 30,
     marginTop: 30,
     backgroundColor: 'orange',
     fontSize: 50,
     color: 'white',
     borderRadius: 5,
   },
   itemText: {
     color: 'white',
     fontWeight: 'bold',

   }
});
