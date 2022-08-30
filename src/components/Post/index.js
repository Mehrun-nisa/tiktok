import { View, Text } from 'react-native'
import React from 'react'
import Video from 'react-native-video'
import styles from './styles'

const Post = () => {
  return (
    <View style={styles.container}>
    <Video 
    source={{uri:'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4'}} 
     style={styles.video}
     resizeMode={'cover'}
     repeat={true}
    />
 </View>
    )
}

export default Post