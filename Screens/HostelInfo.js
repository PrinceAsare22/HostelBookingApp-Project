import { StyleSheet, Text, View, Image, ScrollView, SafeAreaView, ImageBackground } from 'react-native'
import React from 'react'
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from '@expo/vector-icons';

const HostelInfo = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Image source={{ uri: "https://blog.getrooms.co/wp-content/uploads/2019/04/wagyingo-hostel-1-750x500.jpg" }}
          style={{
            height: 400,
          }}>
        </Image>

        <View style={{
          backgroundColor: "white",
          height: 100,
        }}>
          <View style={{
            flexDirection: "row",
            backgroundColor: "white",
            height: 50,
            justifyContent: "space-between",
            alignItems: "center",
          }}>
            <Text style={{
              fontWeight: "bold",
              fontSize: 30,
              color: "#10324d",
              marginTop: 10,
            }}>
              WAGYINGO HOSTEL
            </Text>

            <Ionicons name="md-star" size={24} color="gold" style={{
              marginLeft: 60,
              marginTop: 8,
            }} />

            <Text style={{
              fontWeight: "bold",
              fontSize: 20,
              color: "#10324d",
              marginTop: 10,
              marginRight: 10,
            }}>
              4.5
            </Text>
          </View>
        </View>

        <View style={{
          backgroundColor: "white",
          height:100,
          marginTop: 5,
        }}>
          <Text style={{
            textAlign:"left",
            fontWeight:"bold",
            fontSize:20,
            marginTop:5,
          }}>
          ROOMS AND PRICES
         </Text>
         <Text style={{
            textAlign:"left",
            fontSize:20,
            marginTop:5,
            marginLeft:5,
          }}>
          1 IN 1       ||       OOOO
         </Text>
         <Text style={{
            textAlign:"left",
            fontSize:20,
            marginTop:5,
            marginLeft:5,
          }}>
          2 IN 1       ||       OOOO 
         </Text>
         <Text style={{
            textAlign:"left",
            fontSize:20,
            marginTop:5,
            marginLeft:5,
          }}>
          3 IN 1       ||       OOOO
         </Text>

        </View>
         
      </ScrollView>
    </SafeAreaView>
  )
}

export default HostelInfo

const styles = StyleSheet.create({})