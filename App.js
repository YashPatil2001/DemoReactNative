/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import { StyleSheet, Text, View } from 'react-native';
 
 export default function App() {
   return (
     <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.boldText}>Hello React</Text>
        </View>
        <View style={styles.body}>
          <Text style={styles.body}>hey learning react...<Text >make it bold</Text></Text>
          <Text>hey learning react...</Text>
          <Text>hey learning react...</Text>
          <Text>hey learning react...</Text>
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
   header: {
     backgroundColor: 'red',
     padding: 20
   },
   boldText: {
     fontWeight: 'bold',
     color:'white'
   },
   body: {
     backgroundColor: 'yellow',
     padding:20,
   }
 });