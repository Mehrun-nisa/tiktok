import { View, Text , StyleSheet, Dimensions} from 'react-native'
import React from 'react'

const styles =StyleSheet.create({
    container:
{
    width:'100%',
    height:Dimensions.get('window').height,
},
    video:
    {
position:'absolute',
top:0,
left:0,
bottom:0,
right:0
    },

});

export default styles;