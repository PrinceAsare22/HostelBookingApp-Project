import { StyleSheet, Image, Text, View, Pressable, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { ImageBackground } from 'react-native';
import CustomPressable2 from '../components/CustomPressable2';

const LegonLocScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "LEGON LOCATIONS",
      headerTintColor:'white',
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white"
      },
      headerStyle: {
        backgroundColor: "#10324d",
        height: 100,
      }
    })
  })
  return (
    <View>
      <CustomPressable2 title="Location1"/>
    </View>
  )
}

export default LegonLocScreen

const styles = StyleSheet.create({})