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

const SavedCard = () => {
  return (
    <View
      style={{
        width: '94%',
        height: 112,
        justifyContent: 'center',
        backgroundColor: 'white',
        flexDirection: 'row',
        // alignItems: 'flex-start',
        justifyContent: 'space-between',
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
      <Image
        style={{
          width: 106,
          height: 92,
          alignItems: 'center',
          marginHorizontal: 8,
          alignSelf: 'center',
          marginVertical: 12,
          borderRadius: 20,
        }}
        source={{
          uri: 'https://images4.alphacoders.com/844/thumb-1920-844967.jpg',
        }}
      />
      <View style={{width: 252, marginVertical: 2}}>
        <View
          style={{
            marginTop: 6,
            marginHorizontal: 2,
          }}>
          <Text
            style={{
              fontWeight: '500',
              fontSize: 18,
              fontFamily: 'Poppins-Regular',
            }}>
            5 things to fluids
          </Text>
        </View>
        <View style={{flexDirection: 'row', marginHorizontal: 2}}>
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
            sinister six{' '}
          </Text>
        </View>
        <View
          style={{
            marginTop: 12,
            marginHorizontal: 0,
            marginBottom: 16,
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingRight: 16,
          }}>
          <View style={{flexDirection: 'row'}}>
            <Icons style={{marginRight: 4}} name="eyeo" size={17} />
            <Text
              style={{
                fontFamily: 'Poppins-Regular',
                fontSize: 12,
              }}>
              1.5M views
            </Text>
          </View>

          <View style={{flexDirection: 'row'}}>
            <Icons
              name="closesquareo"
              size={15}
              style={{marginRight: 4, marginTop: 2}}
            />
            <Text
              style={{
                fontFamily: 'Poppins-Regular',
                fontSize: 12,
              }}>
              Remove
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SavedCard;
