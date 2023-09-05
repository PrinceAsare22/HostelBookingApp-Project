import { StyleSheet, Image, Text, View, Pressable, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { ImageBackground } from 'react-native';
import CustomPressable2 from '../components/CustomPressable2';
import { AntDesign } from '@expo/vector-icons';

const KnustLocScreen = () => {

  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "KNUST LOCATIONS",
      headerTintColor: 'white',
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
    <ScrollView>
      <View>
        <CustomPressable2
          title="Ayeduse"
          navigation={navigation}
          screenName="AyeduaseScreen"
        />

        <CustomPressable2
          title="Location1"
          navigation={navigation}
          screenName="AyeduaseScreen"
        />

        <CustomPressable2
          title="Location2"
          navigation={navigation}
          screenName="AyeduaseScreen"
        />

        <CustomPressable2
          title="Location3"
          navigation={navigation}
          screenName="AyeduaseScreen"
        />

        <CustomPressable2
          title="Location4"
          navigation={navigation}
          screenName="AyeduaseScreen"
        />

        <CustomPressable2
          title="Location5"
          navigation={navigation}
          screenName="AyeduaseScreen"
        />
      </View>

    </ScrollView>
  )
}

export default KnustLocScreen

const styles = StyleSheet.create({})