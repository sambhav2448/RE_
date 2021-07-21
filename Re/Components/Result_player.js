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
  ActivityIndicator,
} from 'react-native';
import Icons from 'react-native-vector-icons/AntDesign';
import Card_vid from './Result_tab/vid_card';
import YouTube from 'react-native-youtube';

// import YoutubePlayer, {YoutubeIframeRef} from 'react-native-youtube-iframe';

export default Player = props => {
  console.log;
  return (
    <View style={{width: '100%', height: 300}}>
      <YouTube
        videoId={props.route.params.vidId}
        apiKey="AIzaSyBcSTcbOE4-_prL91v642yCZpZkJSudOBc" // The YouTube video ID
        play // control playback of video with true/false
        // fullscreen // control whether the video should play in fullscreen or inline
        loop // control whether the video should loop when ended
        // onReady={e => this.setState({ isReady: true })}
        // onChangeState={e => this.setState({ status: e.state })}
        // onChangeQuality={e => this.setState({ quality: e.quality })}
        // onError={e => this.setState({ error: e.error })}
        style={{alignSelf: 'stretch', height: 300}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
});
