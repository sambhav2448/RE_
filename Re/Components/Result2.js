import React, {useState, useEffect} from 'react';
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
import AsyncStorage from '@react-native-async-storage/async-storage';

import Icons from 'react-native-vector-icons/AntDesign';
import Card_vid from './Result_tab/vid_card';
// import axios from 'axios';
// import Header from './header';
import CardPlaceholder from './Card-skeleton1';
export default Results = props => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalStatus, setModalStatus] = useState(false);
  const [loaderStatus, setLoaderStatus] = useState(true);
  const [vidList, setVidList] = useState([]);
  const [Asynclist, setAsynclist] = useState([]);

  const url =
    'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=3&q=songs&type=video&key=AIzaSyDQ6QgWz_Fojf8ec7-ZQpRRCUt-QuOyzZ4';

  useEffect(async () => {
    setLoaderStatus(true);
    fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&q=${props.route.params.searchItem}+DIY+hacks+popular&type=video&key=AIzaSyBcSTcbOE4-_prL91v642yCZpZkJSudOBc`,
    )
      .then(res => res.json())
      .then(data => {
        setVidList(data.items);
        setLoaderStatus(false);
      });
  }, [props.route.params.searchItem]);

  function getAsync(newValue) {
    setAsynclist([...Asynclist, newValue]);
    storeToAsync([...Asynclist, newValue]);
  }

  function removeAsync(val) {
    var new_arr = Asynclist;
    var index = new_arr.indexOf(val);
    if (index > -1) {
      new_arr.splice(index, 1);
      setAsynclist([...new_arr]);
    }

    storeToAsync(new_arr);
  }

  const storeToAsync = async arr => {
    const storeVal = arr.toString();
    try {
      await AsyncStorage.setItem('re-app', storeVal);
    } catch (e) {
      console.log(e);
    }
    console.log(storeVal);
  };
  console.log(Asynclist);

  return (
    <View style={{backgroundColor: '#fff', flex: 1}}>
      {/* <Header heading="DIY videos" /> */}
      {/* <ActivityIndicator size="large" color=" #09B44D" /> */}

      {loaderStatus ? (
        <ScrollView>
          <CardPlaceholder />
          <CardPlaceholder />
          <CardPlaceholder />
          <CardPlaceholder />
          <CardPlaceholder />
          <CardPlaceholder />
        </ScrollView>
      ) : (
        <FlatList
          data={vidList}
          renderItem={({item}) => {
            return (
              <Card_vid
                press={() =>
                  props.navigation.navigate('Result3', {
                    vidId: item.id.videoId,
                  })
                }
                vidid={item.id.videoId}
                channel={item.snippet.channelTitle}
                title={item.snippet.title}
                image={item.snippet.thumbnails.high.url}
                channelName={item.snippet.channelTitle}
                dateOfPublish={item.snippet.publishedAt}
                SubmitAsync={getAsync}
                SubmitRemoveAsync={removeAsync}
              />
            );
          }}
          keyExtractor={item => item.id.videoId}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },

  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
