import { StyleSheet, Image, Text, View, Pressable, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { ImageBackground } from 'react-native';
import CustomPressable2 from '../components/CustomPressable2';
import { AntDesign } from '@expo/vector-icons';

const CanamHall = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Canam Hall",
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
      <Text>CanamHall</Text>
    </View>
  )
}

export default CanamHall

const styles = StyleSheet.create({})