import React from 'react';
import {View} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

export default CardPlaceholder = () => {
  return (
    <SkeletonPlaceholder speed={760}>
      <View
        style={{
          width: '94%',
          justifyContent: 'center',
          flexDirection: 'column',
          marginHorizontal: 12,
          marginTop: 32,
          borderRadius: 12,
          marginLeft: 20,
        }}>
        <View
          style={{
            width: '94%',
            height: 126,
          }}
        />

        <View style={{justifyContent: 'center', marginTop: 8}}>
          <View style={{width: '94%', height: 20, borderRadius: 4}} />
          <View
            style={{marginTop: 8, width: 80, height: 20, borderRadius: 4}}
          />
          <View
            style={{marginTop: 8, width: '94%', height: 20, borderRadius: 4}}
          />
        </View>
      </View>
    </SkeletonPlaceholder>
  );
};
