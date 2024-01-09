import { View, Text, TextInput } from 'react-native'
import React from 'react'
import colors from '../config/colors'
import SPACING from '../config/SPACING'
import Icon from 'react-native-vector-icons/FontAwesome';

const SearchField = () => {
  return (
    <View style={{
        borderRadius:SPACING,
        overflow:'hidden'
    }}>
        <View style={{
            alignItems:'center',
            justifyContent:'center'
        }}>
           <TextInput style={{
            width:'100%',
            color:'white',
            fontSize:SPACING*1.7,
            padding:SPACING,
            paddingLeft:SPACING*3.5,
            elevation:1,
            shadowColor:'white',
            borderRadius:5
           }}
           placeholder='Find your coffee...'
           placeholderTextColor={colors.white}></TextInput>
           <Icon style={{
            position:'absolute',
            left:SPACING/2,
            paddingLeft:SPACING/2
           }} name='search' color={colors.light} size={SPACING*2}/>
        </View>
    </View>
  )
}

export default SearchField