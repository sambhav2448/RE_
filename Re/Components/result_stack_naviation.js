import {createStackNavigator} from '@react-navigation/stack';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  Modal,
  Image,
} from 'react-native';
import Result1 from './Result1';
import Result2 from './Result2';
import React from 'react';
import Player from './Result_player';

const Stack = createStackNavigator();

export default function MyStack(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Result1"
        component={Result1}
        initialParams={{
          param: props.route.params.uri,
          baseImage: props.route.params.bas64Image,
        }}
      />
      <Stack.Screen name="Result2" component={Result2} />
      <Stack.Screen name="Result3" component={Player} />
    </Stack.Navigator>
  );
}
