import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

export default InfoCard = ({nav, name, score}) => {
  return (
    <TouchableOpacity
      onPress={nav}
      activeOpacity={0.6}
      style={{
        backgroundColor: '#D0F1DE',
        height: 160,
        width: 160,
        padding: 32,
        margin: 18,
        marginTop: 32,

        borderRadius: 8,
      }}>
      <Text style={{fontFamily: 'Poppins-Regular'}}>{name}</Text>
      <Text style={{fontFamily: 'Poppins-Regular'}}>{score.toFixed(1)} %</Text>
    </TouchableOpacity>
  );
};
