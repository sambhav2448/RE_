import {
  ScrollView,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
  Modal,
  Pressable,
  TouchableWithoutFeedback,
  Keyboard,
  ActivityIndicator,
} from 'react-native';
import Header from '../Components/header';
import React, {useState, useEffect} from 'react';

export default function Maps() {
  const sbmit = () => {
    fetch('http://122.171.111.84:5000/')
      .then(res => res.json())
      .then(data => {
        // setVidList(data.items);
        console.log(data);
        console.log('post ho gaya');
      })
      .catch(e => console.log('errir'));
  };

  return (
    <View style={{backgroundColor: 'pink', flex: 1}}>
      <Header heading="Recycling stations" />

      <Text>map here</Text>
      <TouchableOpacity
        style={{
          backgroundColor: 'green',
          justifyContent: 'center',
          height: 80,
          color: 'white',
        }}
        onPress={sbmit}>
        <Text>fetch data</Text>
      </TouchableOpacity>
    </View>
  );
}
