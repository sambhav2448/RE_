import React, {useState, useEffect} from 'react';
import {Text, View, ScrollView} from 'react-native';
import SavedCard from '../Components/SavedVideo/Card';
import Header from '../Components/header';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SavedVideos() {
  const [vidId, setVidId] = useState();
  const [vidlist, setVidlist] = useState([]);

  useEffect(() => {
    const readVid = async () => {
      console.log('hi');
      try {
        const value = await AsyncStorage.getItem('re-app');

        if (value !== null) {
          console.log(value);
          setVidlist(value.split(','));
        }
      } catch (error) {
        console.log(error);
      }
    };

    readVid();
  }, []);

  console.log(vidlist, 'k');
  return (
    <View style={{backgroundColor: '#fff', flex: 1}}>
      <Header heading="Saved videos" />
      <ScrollView>
        {vidlist.map(item => {
          return <SavedCard />;
        })}
      </ScrollView>
    </View>
  );
}
