import React from 'react';
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
  StatusBar,
} from 'react-native';

const Header = props => {
  return (
    <>
      <StatusBar animated={true} backgroundColor="#09B44D" />
      <View
        style={{
          backgroundColor: '#09B44D',
          height: 54,
          justifyContent: 'center',
          alignItems: 'center',
          //   borderTopLeftRadius: 12,
          //   borderTopRightRadius: 12,
        }}>
        <View style={{}}>
          <Text
            style={{
              color: 'white',
              fontFamily: 'Poppins-Regular',
              fontSize: 22,
              fontWeight: '500',
              lineHeight: 36,
            }}>
            {props.heading}
          </Text>
        </View>
      </View>
    </>
  );
};

export default Header;
