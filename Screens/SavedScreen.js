import { StyleSheet, Text, View } from 'react-native'
import React, {useLayoutEffect} from 'react'
import { useNavigation } from '@react-navigation/native'

const SavedScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown:true,
      title:"SAVED",
      headerTitleStyle:{
        fontSize:20,
        fontWeight:"bold",
        color:"white"
      },
      headerStyle:{
        backgroundColor:"#10324d",
      }
    })
  })
  return (
    <View>
      <Text>BOOK</Text>
    </View>
  )
}

export default SavedScreen

const styles = StyleSheet.create({})