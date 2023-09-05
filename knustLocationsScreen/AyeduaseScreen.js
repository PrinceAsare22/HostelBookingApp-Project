import { StyleSheet, Image, Text, View, Pressable, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { ImageBackground } from 'react-native';
import CustomPressable2 from '../components/CustomPressable2';
import { AntDesign } from '@expo/vector-icons';
import HostelList from '../components/HostelList';

const AyeduaseScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "AYEDUSE HOSTELS",
      headerTintColor: 'white',
      headerBackTitleVisible: false,
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
      <HostelList
        title="WAGYINGO HOSTEL"
        ratings="4.0"
        location="AYEDUASE"
        room1="One in One"
        room2="Two in One"
        room3="Three in One"
        imageUrl="https://blog.getrooms.co/wp-content/uploads/2019/04/wagyingo-hostel-1-750x500.jpg"
        navigation={navigation}
        screenName="WagyingoHostel" />
      <HostelList
        title="VICTORY TOWERS"
        ratings="4.0"
        location="AYEDUASE"
        room1="One in One"
        room2="Two in One"
        room3="Three in One"
        imageUrl="https://hypercitigh.com/wp-content/uploads/2020/11/wagyingo-hostel-hypercitigh.com_.jpg" 
        navigation={navigation}
        screenName="VictoryTowers"/>
      <HostelList
        title="WESTEND HOSTEL"
        ratings="4.0"
        location="AYEDUASE"
        room1="One in One"
        room2="Two in One"
        room3="Three in One"
        imageUrl="https://blog.getrooms.co/wp-content/uploads/2018/01/IMG_1400-972.jpg" 
        navigation={navigation}
        screenName="WestendHostel"/>
      <HostelList
        title="CANAM HALL"
        ratings="3.9"
        location="AYEDUASE"
        room1="One in One"
        room2="Two in One"
        room3="Three in One"
        imageUrl="https://blog.getrooms.co/wp-content/uploads/2019/08/canam-hall-2-1024x682.jpg" 
        navigation={navigation}
        screenName="CanamHall"/>
      <HostelList
        title="FRONTLINE APARTMENT"
        ratings="4.0"
        location="AYEDUASE"
        room1="One in One"
        room2="Two in One"
        room3="Three in One"
        imageUrl="https://blog.getrooms.co/wp-content/uploads/2018/01/IMG_1580-197.jpg"
        navigation={navigation}
        screenName="FrontlineApartment" />
      <HostelList
        title="FRONTLINE INN"
        ratings="3.6"
        location="AYEDUASE"
        room1="One in One"
        room2="Two in One"
        room3="Three in One"
        imageUrl="https://blog.getrooms.co/wp-content/uploads/2019/08/frontline-hostel-1-1024x682.jpg"
        navigation={navigation}
        screenName="FrontlineInn" />
      <HostelList
        title="FRONTLINE COURT"
        ratings="3.7"
        location="AYEDUASE"
        room1="One in One"
        room2="Two in One"
        room3="Three in One"
        imageUrl="https://blog.getrooms.co/wp-content/uploads/2018/01/IMG_1501-207.jpg" 
        navigation={navigation}
        screenName="FrontlineCourt"/>
      <HostelList
        title="WHITE HOUSE"
        ratings="3.4"
        location="AYEDUASE"
        room1="One in One"
        room2="Two in One"
        room3="Three in One"
        imageUrl="https://blog.getrooms.co/wp-content/uploads/2018/01/IMG_1350-976.jpg"
        navigation={navigation}
        screenName="WhiteHouse" />
      <HostelList
        title="RISING SUN"
        ratings="3.4"
        location="AYEDUASE"
        room1="One in One"
        room2="Two in One"
        room3="Three in One"
        imageUrl="https://blog.getrooms.co/wp-content/uploads/2018/01/IMG_1483-809.jpg"
        navigation={navigation}
        screenName="RisingSun" />

    </ScrollView>
  )
}

export default AyeduaseScreen

const styles = StyleSheet.create({})