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
} from 'react-native';
import '../Components/InfoCard';
import InfoCard from '../Components/InfoCard';
import Icons from 'react-native-vector-icons/AntDesign';
import Card_vid from '../Components/Result_tab/vid_card';
import Header from '../Components/header';

export default Results = props => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalStatus, setModalStatus] = useState(false);
  const [propImage, setpropImage] = useState(false);

  return (
    <View style={{backgroundColor: '#fff', flex: 1}}>
      <Header heading="DIY videos" />

      <ScrollView>
        <Card_vid />
        <Card_vid />
        <Card_vid />
        <Card_vid />
        <Card_vid />
        <Card_vid />
        <Card_vid />

        <Card_vid />
        <Card_vid />
      </ScrollView>
    </View>
  );
  // return (
  //   <View style={{backgroundColor: '#fff', flex: 1}}>
  //     {/* <Image
  //       style={{height: 200, width: 200}}
  //       source={{uri: props.route.params.uri}}></Image> */}
  //     {/* <FlatList
  //       style={{paddingHorizontal: 8}}
  //       columnWrapperStyle={{justifyContent: 'space-between'}}
  //       horizontal={false}
  //       numColumns={2}
  //       key={(1, 3, 5)}
  //       data={[1, 2, 5]}
  //       renderItem={({item}) => {
  //         return <InfoCard />;
  //       }}
  //     /> */}
  //     <View
  //       style={{
  //         // padding: 12,
  //         // bottom: 90,
  //         top: '82%',
  //         textAlign: 'center',
  //         marginHorizontal: 'auto',
  //       }}>
  //       <Text style={{fontFamily: 'Poppins-Regular'}}>
  //         Didn’t find what you were looking for? Try
  //       </Text>

  //       {/* <Text style={{fontFamily: 'Poppins-Regular'}}>or</Text> */}
  //     </View>
  //     <View
  //       style={{
  //         // padding: 12,
  //         // bottom: 90,
  //         top: '82%',
  //         textAlign: 'center',
  //         marginHorizontal: 'auto',
  //       }}>
  //       <TouchableOpacity
  //         style={{
  //           color: '#09b44d',
  //           textDecorationLine: 'underline',
  //         }}></TouchableOpacity>
  //       <TouchableOpacity
  //         style={{color: '#09b44d', textDecorationLine: 'underline'}}>
  //         <Text>Retaking the photo</Text>
  //       </TouchableOpacity>
  //     </View>
  //     <View style={styles.centeredView}>
  //       <Modal
  //         transparent={true}
  //         backdropOpacity={0.1}
  //         backdropColor={'rgba(0, 0, 0, 0.8)'}
  //         visible={modalStatus}
  //         hasBackdrop={true}
  //         animationType="slide"
  //         backdropOpacity={0.9}>
  //         <View
  //           style={{
  //             height: '40%',
  //             marginTop: 'auto',
  //             backgroundColor: 'white',
  //             opacity: 1,
  //             shadowColor: '#000',
  //             shadowOffset: {
  //               width: 0,
  //               height: 2,
  //             },
  //             shadowOpacity: 0.25,
  //             shadowRadius: 4,
  //             elevation: 7,
  //           }}>
  //           <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
  //             <View>
  //               <Icons
  //                 name="close"
  //                 size={30}
  //                 style={{padding: 12}}
  //                 onPress={() => setModalStatus(false)}
  //               />
  //             </View>
  //           </TouchableWithoutFeedback>
  //         </View>
  //       </Modal>
  //       <Pressable
  //         style={[styles.button, styles.buttonOpen]}
  //         onPress={() => setModalStatus(true)}>
  //         <Text style={styles.textStyle}>Show Modal</Text>
  //       </Pressable>
  //     </View>
  //   </View>
  // );
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
