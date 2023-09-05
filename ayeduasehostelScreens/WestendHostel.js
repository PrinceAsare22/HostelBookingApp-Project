import { StyleSheet, Image, Text, View, Pressable, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { ImageBackground } from 'react-native';
import CustomPressable2 from '../components/CustomPressable2';
import { AntDesign } from '@expo/vector-icons';
import AyeduaseScreen from '../knustLocationsScreen/AyeduaseScreen';

const WestendHostel = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Westend Hostel",
      headerTintColor: 'white',
      headerBackTitleVisible:false,
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
      <Text>WestendHostel</Text>
    </View>
  )
}

export default WestendHostel

const styles = StyleSheet.create({})