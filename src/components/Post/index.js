import { View, Text, TouchableWithoutFeedback } from 'react-native'
import React, { useState } from 'react'
import Video from 'react-native-video'
import styles from './styles'

const Post = () => {
    const [paused, setPaused] = useState(false);

    const onPlayPausePress =()=>
    {
        setPaused(!paused);
    };
  return (
    <View style={styles.container}>
        <TouchableWithoutFeedback onPress={onPlayPausePress}>
    <Video 
    source={{uri:'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4'}} 
     style={styles.video}
     resizeMode={'cover'}
     repeat={true}
     paused={paused}
    />
    </TouchableWithoutFeedback>
 </View>
    )
}

export default Post