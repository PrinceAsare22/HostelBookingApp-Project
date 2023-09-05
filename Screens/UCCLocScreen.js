import { StyleSheet, Image, Text, View, Pressable, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { ImageBackground } from 'react-native';

const UCCLocScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "UCC LOCATIONS",
      headerTintColor:'white',
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white"
      },
      headerStyle: {
        backgroundColor: "#10324d",
        height: 100,
      },
    })
  })
  return (
    <View>
      <Text>UCCLocScreen</Text>
    </View>
  )
}

export default UCCLocScreen

const styles = StyleSheet.create({})