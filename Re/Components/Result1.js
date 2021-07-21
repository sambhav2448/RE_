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
  Button,
  ActivityIndicator,
} from 'react-native';
import InfoCard from './InfoCard';
import Icons from 'react-native-vector-icons/AntDesign';
import Card_vid from './Result_tab/vid_card';
import Header from './header';

export default Results = props => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalStatus, setModalStatus] = useState(false);
  const [propImage, setpropImage] = useState('');
  const [result, setResult] = useState([]);
  const [loader, setLoader] = useState(true);

  const dataset = [
    {
      cardName: 'plastic',
      key: 1,
    },
    {
      cardName: 'can',
      key: 2,
    },
    {
      cardName: 'metal',
      key: 3,
    },
    {
      cardName: 'glass',
      key: 4,
    },
  ];

  useEffect(async () => {
    setpropImage(props.route.params.baseImage);
    onFileUpload();
    setLoader(true);
  }, []);

  const onFileUpload = () => {
    const URL = 'https://cryptic-bayou-74696.herokuapp.com/predict';
    // const formData = new FormData();
    // formData.append('image', propImage);

    // fetch('https://cryptic-bayou-74696.herokuapp.com/prediction', {
    //   method: 'post',
    //   image: formData,
    //   // body: JSON.stringify(formData),
    // })
    //   .then(response => {
    //     //do something awesome that makes the world a better place
    //     console.log(response);
    //   })
    //   .catch(e => console.log(e.message));
    // console.log('call function');
    // formData.append('image', {
    //   uri: props.route.params.param.split('//')[1],
    //   name: 'picture.jpg',
    //   type: 'image/jpg',
    // });
    // Create the config object for the POST
    const config = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        bytes: props.route.params.baseImage,
      }),
    };

    fetch(URL, config)
      .then(res => res.json())

      .then(res => {
        console.log(res);
        console.log('api call success');
        console.log(res.result);
        setResult(res.result);
        setLoader(false);
      })
      .catch(err => {
        console.log(err);
        console.log('eww');
        setLoader(false);
      });
  };
  console.log(result);
  return (
    <ScrollView style={{backgroundColor: '#fff', flex: 1}}>
      {loader ? (
        <View
          style={{
            // position: 'absolute',
            alignSelf: 'center',
            backgroundColor: '#efefef',
            height: 140,
            width: 140,
            borderRadius: 4,
            marginTop: 140,
            // zIndex: 3000,
          }}>
          <ActivityIndicator
            size="large"
            color=" #39B49D"
            style={{paddingTop: 52}}
          />
        </View>
      ) : (
        <FlatList
          style={{paddingHorizontal: 8}}
          columnWrapperStyle={{justifyContent: 'space-between'}}
          horizontal={false}
          numColumns={2}
          data={result}
          renderItem={({item}) => {
            return (
              <InfoCard
                name={item.object_name}
                score={item.confidence_value}
                nav={() =>
                  props.navigation.navigate('Result2', {
                    searchItem: item.object_name,
                  })
                }
              />
            );
          }}
          keyExtractor={item => Math.random()}
        />
      )}
      {/* <Button
        title="Go to Details"
        onPress={() => props.navigation.navigate('Result2')}
      /> */}
      {/* <View
        style={{
          // padding: 12,
          // bottom: 90,
          top: '82%',
          textAlign: 'center',
          marginHorizontal: 'auto',
        }}>
        <Text style={{fontFamily: 'Poppins-Regular'}}>
          Didn’t find what you were looking for? Try
        </Text> */}

      {/* <Text style={{fontFamily: 'Poppins-Regular'}}>or</Text> */}
      {/* </View> */}
      {/* <View
        style={{
          // padding: 12,
          // bottom: 90,
          top: '82%',
          textAlign: 'center',
          marginHorizontal: 'auto',
        }}>
        <TouchableOpacity
          style={{
            color: '#09b44d',
            textDecorationLine: 'underline',
          }}>
          <Text>dienfe</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{color: '#09b44d', textDecorationLine: 'underline'}}>
          <Text>Retaking the photo</Text>
        </TouchableOpacity>
      </View> */}
      {/* <View style={styles.centeredView}>
        <Modal
          transparent={true}
          backdropOpacity={0.1}
          backdropColor={'rgba(0, 0, 0, 0.8)'}
          visible={modalStatus}
          hasBackdrop={true}
          animationType="slide"
          backdropOpacity={0.9}>
          <View
            style={{
              height: '40%',
              marginTop: 'auto',
              backgroundColor: 'white',
              opacity: 1,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 4,
              elevation: 7,
            }}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <View>
                <Icons
                  name="close"
                  size={30}
                  style={{padding: 12}}
                  onPress={() => setModalStatus(false)}
                />
              </View>
            </TouchableWithoutFeedback>
          </View>
        </Modal>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setModalStatus(true)}>
          <Text style={styles.textStyle}>Show Modal</Text>
        </Pressable>
      </View> */}
    </ScrollView>
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

// {"_bodyBlob": {"_data": {"__collector": [Object], "blobId": "8eabdf3c-8098-4a15-8526-4db1dcb4ad26", "offset": 0, "size": 1282}}, "_bodyInit": {"_data": {"__collector": [Object], "blobId": "8eabdf3c-8098-4a15-8526-4db1dcb4ad26", "offset": 0, "size": 1282}}, "bodyUsed": false, "headers": {"map": {"access-control-allow-origin": "*", "connection": "keep-alive", "content-length": "1282", "content-type": "application/json; charset=utf-8", "date": "Sat, 05 Jun 2021 16:58:30 GMT", "etag": "W/\"502-FcpaKdM3BUMwE4M27CllaAAEu4A\"", "server": "Cowboy", "via": "1.1 vegur", "x-powered-by": "Express"}}, "ok": true, "status": 200, "statusText": "", "type": "default", "url": "https://cryptic-bayou-74696.herokuapp.com/prediction"}
