import React, {useEffect} from 'react';
import Camera from './Components/Camera';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView} from 'react-native';
import Icons from 'react-native-vector-icons/Feather';
import {Text, View, TouchableOpacity} from 'react-native';

import ResultScreen from './Components/Result1';
import SavedVideoScreen from './screens/SavedVideos';
// import Camera from './screens/camera';
import MapsScreen from './screens/Maps';
import SplashScreen from 'react-native-splash-screen';
import Result_stack from './Components/result_stack_naviation';
import Plants from './screens/Plants';

const Tab = createBottomTabNavigator();

export default App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              let iconName;
              let fontStyle;
              let fontColor;
              let fontSize;
              let focusSetting = () => {
                fontStyle = focused ? 'Poppins-Regular' : 'Poppins-Regular';
                fontColor = focused ? '#262626' : '#878787';
                fontSize = focused ? 12 : 12;
              };

              if (route.name === 'Camera') {
                iconName = 'maximize';
                tabName = 'Camera';
                focusSetting();
              } else if (route.name === 'Results') {
                iconName = 'file-text';
                tabName = 'Results';
                focusSetting();
              } else if (route.name === 'Maps') {
                iconName = 'map-pin';
                tabName = 'Maps';
                focusSetting();
              } else if (route.name === 'Videos') {
                iconName = 'save';
                tabName = 'Videos';
                focusSetting();
              } else if (route.name === 'Plants') {
                iconName = 'file-text';
                tabName = 'Plants';
                focusSetting();
              }
              // return <Icons name={iconName} size={26} color={color} />;
              return (
                <View style={{alignItems: 'center'}}>
                  <Icons name={iconName} size={26} color={color} />
                  <Text
                    style={{
                      fontFamily: fontStyle,
                      fontSize: fontSize,
                      color: fontColor,
                      paddingTop: 2,
                    }}>
                    {tabName}
                  </Text>
                </View>
              );
            },
          })}
          tabBarOptions={{
            activeTintColor: '#262626',
            inactiveTintColor: '#878787',
            tabStyle: {
              // padding: 3,
            },
            style: {
              position: 'absolute',
              bottom: 0,
              right: 0,
              left: 0,
              height: 80,
              // zIndex: 8,
              borderRadius: 21,
              // elevation: 9,

              backgroundColor: '#fff',
            },
            showLabel: false,
          }}>
          <Tab.Screen name="Camera" component={Camera} />
          <Tab.Screen name="Results" component={Result_stack} />
          <Tab.Screen name="Maps" component={MapsScreen} />
          <Tab.Screen name="Videos" component={SavedVideoScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};
