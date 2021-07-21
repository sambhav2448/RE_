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
import Icons from 'react-native-vector-icons/AntDesign';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Card_vid = ({
  image,
  title,
  channel,
  channelName,
  vidid,
  press,
  dateOfPublish,
  SubmitAsync,
  SubmitRemoveAsync,
}) => {
  const [vidId, setVidId] = useState();
  const [checkBox, setCheckBox] = useState(false);

  useEffect(() => {
    setVidId(vidid);
  }, [vidid]);
  function diff_years(dt1) {
    // dt2 = date.now();
    const yearold = new Date(dt1).getFullYear();
    const yearnew = new Date().getFullYear();
    return yearnew - yearold;
  }

  const handleVidSave = async () => {
    console.log(vidId);
    SubmitAsync(vidId);
    //send this id to parent
    // const storeVal = vidIds.toString();
    // try {
    //   await AsyncStorage.setItem('re-app', storeVal);
    // } catch (e) {
    //   console.log(e);
    // }
    // console.log(vidId, storeVal);
  };

  const handleRemove = async () => {
    SubmitRemoveAsync(vidId);
  };

  const readVid = async () => {
    // console.log('hi');
    try {
      const value = await AsyncStorage.getItem('re-app');

      if (value !== null) {
        // We have data!!
        console.log(value);
      } else {
        console.log('POMPu');
      }
    } catch (error) {
      // Error retrieving data
      console.log(error);
    }
  };

  const handleCheckbox = () => {
    // console.log(vidId);
    setCheckBox(!checkBox);
    if (!checkBox) {
      handleVidSave();
    } else {
      handleRemove();
    }
  };
  // console.log(vidId);
  return (
    <View
      style={{
        width: '94%',
        justifyContent: 'center',
        backgroundColor: 'white',
        flexDirection: 'column',
        // alignItems: 'flex-start',
        marginHorizontal: 12,
        marginTop: 16,
        // marginTop: 32,
        borderRadius: 12,
        borderWidth: 0.1,
        borderColor: '#fff',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,

        elevation: 2,
      }}>
      <TouchableOpacity activeOpacity={0.7} onPress={press}>
        <Image
          style={{
            width: '94%',
            height: 126,
            alignItems: 'center',
            marginHorizontal: 8,
            alignSelf: 'center',
            marginTop: 12,
            borderRadius: 20,
          }}
          source={{uri: `${image}`}}
        />

        <View
          style={{
            marginTop: 6,
            marginHorizontal: 20,
          }}>
          <Text
            style={{
              fontWeight: '500',
              fontSize: 18,
              fontFamily: 'Poppins-Regular',
            }}>
            {/* 5 cool things to do with web fluids */}
            {title}
          </Text>
        </View>
        <View style={{flexDirection: 'row', marginHorizontal: 20}}>
          <Text
            style={{
              fontFamily: 'Poppins-Regular',
            }}>
            by{'  '}
          </Text>
          <Text
            style={{
              fontFamily: 'Poppins-Regular',
              color: '#09B44D',
            }}>
            {channelName}
          </Text>
        </View>
      </TouchableOpacity>
      <View
        style={{
          marginTop: 12,
          marginHorizontal: 20,
          marginBottom: 16,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View style={{flexDirection: 'row'}}>
          <Icons name="calendar" size={18} style={{marginRight: 4}} />
          <Text
            style={{
              fontFamily: 'Poppins-Regular',
            }}>
            {diff_years(dateOfPublish)} years ago
          </Text>
        </View>
        <TouchableOpacity activeOpacity={0.7} onPress={readVid}>
          <Text>check</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{flexDirection: 'row'}}
          onPress={() => handleCheckbox()}>
          {checkBox ? (
            <>
              <Icons name="close" size={19} style={{marginRight: 4}} />
              <Text
                style={{
                  fontFamily: 'Poppins-Regular',
                }}>
                Remove from saved
              </Text>
            </>
          ) : (
            <>
              <Icons name="save" size={19} style={{marginRight: 4}} />
              <Text
                style={{
                  fontFamily: 'Poppins-Regular',
                }}>
                Save
              </Text>
            </>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Card_vid;

// onPress={(vidid)=>handleVidSave(vidid)}>
