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
import Header from '../Components/header';
import React, {useState, useEffect} from 'react';
import Icons from 'react-native-vector-icons/AntDesign';

export default function Maps() {
  const [data, setData] = useState();
  const [loader, setLoader] = useState(false);
  const [danger, setDanger] = useState(false);

  useEffect(async () => {
    fetch(`https://gardener-2c47a-default-rtdb.firebaseio.com/app.json`)
      .then(res => res.json())
      .then(data => {
        setData(data);
        if (data.Moisture < 12 || (data.Humidity > 50 && data.Temp > 30)) {
          setDanger(true);
        } else {
          setDanger(false);
        }
      });
  }, []);

  const refresh = async () => {
    setLoader(true);
    fetch(`https://gardener-2c47a-default-rtdb.firebaseio.com/app.json`)
      .then(res => res.json())
      .then(data => {
        setData(data);
        setLoader(false);
      });
  };

  const pushpump = async () => {
    fetch('https://gardener-2c47a-default-rtdb.firebaseio.com/app.json', {
      method: 'put',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },

      body: JSON.stringify({
        Humidity: data.Humidity,
        Moisture: data.Moisture,
        Temp: data.Temp,
        pwm: 255,
        pwn: 255,
        pumpMode: true,
      }),
    }).then(response => {
      //do something awesome that makes the world a better place
      console.log(response);
    });
    console.log('water pumped');
    // alert('Watering your plants!');
  };
  return (
    <View style={{backgroundColor: '#04551939', flex: 1}}>
      <Header heading="Live Stats" />
      {loader && (
        <View
          style={{
            position: 'absolute',
            alignSelf: 'center',
            backgroundColor: '#e3e3e3',
            height: 120,
            width: 120,
            marginTop: 340,
          }}>
          <ActivityIndicator
            size="large"
            color=" #39B49D"
            style={{paddingTop: 42}}
          />
        </View>
      )}

      <View
        style={{
          padding: 40,
          width: '100%',
          marginTop: 32,
          paddingHorizontal: 60,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 30,
          }}>
          <Text style={{fontSize: 30}}>Temp:</Text>
          <Text style={{fontSize: 30}}>{data && data.Temp.toFixed(1)} °C</Text>
        </View>

        <View
          style={{
            marginBottom: 30,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={{fontSize: 30}}>Humidity:</Text>
          <Text style={{fontSize: 30}}>
            {data && data.Humidity.toFixed(1)} %
          </Text>
        </View>

        <View
          style={{
            marginBottom: 30,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={{fontSize: 30}}>Moisture:</Text>
          <Text style={{fontSize: 30}}>
            {data && data.Moisture.toFixed(1)} %
          </Text>
        </View>
        <Icons
          name="reload1"
          size={32}
          style={{marginLeft: 260, marginTop: 28}}
          onPress={refresh}
        />
      </View>

      <TouchableOpacity
        onPress={pushpump}
        activeOpacity={0.8}
        style={{
          backgroundColor: '#22882279',
          width: 212,
          height: 72,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 16,
          alignSelf: 'center',
          marginTop: 142,
        }}>
        <Text style={{color: '#efe', fontSize: 20}}>Water My Plants!</Text>
      </TouchableOpacity>
      {danger && (
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 18}}>
          <Icons
            name="warning"
            size={32}
            style={{marginLeft: 26, marginRight: 8}}
            onPress={refresh}
            color="#ee2222"
          />

          <Text style={{color: '#ee2222', fontSize: 26}}>
            Soil moisture levels are low!
          </Text>
        </View>
      )}
    </View>
  );
}
