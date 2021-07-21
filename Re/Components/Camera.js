import React, {PureComponent} from 'react';
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
import {RNCamera} from 'react-native-camera';
// MaterialCommunityIcons
import ShutterIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icons from 'react-native-vector-icons/AntDesign';
import Header from './header';

export default class Camera extends PureComponent {
  state = {
    flashMode: RNCamera.Constants.FlashMode.off,
    flashIcon: 'flash-off',
    modalOpen: false,
    imageUri: '',
  };

  render(props) {
    return (
      <View style={styles.container}>
        <Header heading="Take a photo" />

        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={this.state.flashMode}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          captureAudio={false}>
          <View style={{position: 'absolute', top: 36, left: 26}}>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => this.flashhandler()}>
              <ShutterIcon
                name={this.state.flashIcon}
                size={32}
                color="white"
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              bottom: 120,
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={this.takePicture.bind(this)}>
              <ShutterIcon name="circle-slice-8" size={92} color="white" />
            </TouchableOpacity>
          </View>
        </RNCamera>

        <Modal
          transparent={true}
          visible={this.state.modalOpen}
          animationType="slide">
          <View
            style={{
              height: '100%',
              marginTop: 'auto',
              backgroundColor: 'white',
            }}>
            <View style={{flex: 13}}>
              <Image
                style={{width: '100%', height: '100%'}}
                source={{
                  uri: this.state.imageUri,
                }}
              />
            </View>
            <View
              style={{
                flex: 2,
                justifyContent: 'space-around',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Icons
                name="check"
                size={40}
                // style={{...styles.modalToggle, ...styles.modalClose}}
                onPress={() => this.getResult()}
              />
              <Icons
                name="close"
                size={40}
                // style={{...styles.modalToggle, ...styles.modalClose}}
                onPress={() => this.modaltoggle()}
              />
            </View>
          </View>
        </Modal>
      </View>
    );
  }

  modaltoggle = () => {
    this.setState({modalOpen: !this.state.modalOpen});
    // console.log('ji');
  };

  flashhandler = () => {
    if (this.state.flashIcon == 'flash-off') {
      this.setState({
        flashIcon: 'flash',
        flashMode: RNCamera.Constants.FlashMode.on,
      });
    } else {
      this.setState({
        flashIcon: 'flash-off',
        flashMode: RNCamera.Constants.FlashMode.off,
      });
    }
  };

  takePicture = async () => {
    try {
      if (this.camera) {
        const options = {quality: 0.5, base64: true};
        const data = await this.camera.takePictureAsync(options);
        this.setState({
          modalOpen: true,
          imageUri: data.uri,
          bas64Image: data.base64,
        });
      }
    } catch (e) {
      console.log(e);
    }
  };

  getResult = () => {
    this.props.navigation.navigate('Results', {
      uri: this.state.imageUri,
      bas64Image: this.state.bas64Image,
    });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
    height: '10%',
  },
  preview: {
    flex: 4,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
});
