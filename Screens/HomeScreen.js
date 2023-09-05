import { StyleSheet, Image, Text, View, Pressable, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { ImageBackground } from 'react-native';
import { AntDesign } from "@expo/vector-icons";


const HomeScreen = () => {

  {/*HOME SCREEN HEADER */ }
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "BOOKit.com",
      headerTitleStyle: {
        fontSize: 30,
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

      <Text style={{
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 10,
        alignSelf: 'center',
        color:'#10324d',
      }}>
        UNIVERSITIES
      </Text>

      {/*THIS VIEW IS FOR THE VARIOUS UNIVERSITIES IN A ROW*/}
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
        marginTop: 10,
      }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <Pressable onPress={() => navigation.navigate('KNUST LOCATIONS')}>
            <ImageBackground source={{ uri: 'https://www.adomonline.com/wp-content/uploads/2019/11/KNUST-ICON-1024x643.jpg' }}
              style={{ width: 330, height: 200, borderRadius: 10, marginHorizontal: 10,}}>
              <Text style={{
                fontSize: 40,
                fontWeight: 'bold',
                color: 'white',
                marginTop: 160,
                marginHorizontal: 10,
              }}>
                KNUST
              </Text>
            </ImageBackground>
          </Pressable>

          <Pressable onPress={() => navigation.navigate('LEGON LOCATIONS')}>
            <ImageBackground source={{ uri: 'https://i0.wp.com/kuulpeeps.com/wp-content/uploads/2018/01/ug.jpg?fit=1600%2C900&ssl=1' }}
              style={{ width: 330, height: 200, borderRadius: 10, marginHorizontal: 10 }}>
              <Text style={{
                fontSize: 40,
                fontWeight: 'bold',
                color: 'white',
                marginTop: 160,
                marginHorizontal: 10,
              }}>
                LEGON
              </Text>
            </ImageBackground>
          </Pressable>

          <Pressable onPress={() => navigation.navigate('UCC LOCATIONS')}>
            <ImageBackground source={{ uri: 'https://th.bing.com/th/id/R.c20bc8db248b0672736ef75d820012e1?rik=AYzViq%2fo10TTcg&pid=ImgRaw&r=0&sres=1&sresct=1' }}
              style={{ width: 330, height: 200, borderRadius: 10, marginHorizontal: 10 }}>
              <Text style={{
                fontSize: 40,
                fontWeight: 'bold',
                color: 'white',
                marginTop: 160,
                marginHorizontal: 10,
              }}>
                UCC
              </Text>
            </ImageBackground>
          </Pressable>
        </ScrollView>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={{
        flexDirection:'row',
      }}>
      <View style={{
        height: 190,
        width:170,
        backgroundColor: '#10324d',
        marginTop: 30,
        borderRadius:10,
        marginHorizontal:10,

      }}>
        <Text style={{
          color:'white',
          fontWeight:'bold',
          fontSize:20,
          marginTop:25,
          marginLeft:10,
        }}>
          GET A NICE TOUR 
        </Text>

        <Text style={{
          color:'white',
          fontSize:23,
          marginLeft:10,
        }}>
          OF YOUR FAVOURITE HOSTELS AT THE COMFORT OF YOUR HOMES😁
        </Text>  
      </View>

      <View style={{
        height: 190,
        width:170,
        backgroundColor: 'white',
        marginTop: 30,
        borderRadius:10,
        marginRight:10,
      }}>
        <Text style={{
          color:'#10324d',
          fontWeight:'bold',
          fontSize:20,
          marginTop:10,
          marginLeft:10,
        }}>
          BOOKit Provides 
        </Text>

        <Text style={{
          color:'#10324d',
          fontWeight:'bold',
          fontSize:20,
          marginHorizontal:45,
        }}>
           You With
        </Text>

        <Text style={{
          color:'#10324d',
          fontSize:20,
          marginLeft:10,
          marginTop:10,
        }}>
          *Hostel Locations
        </Text>

        <Text style={{
          color:'#10324d',
          fontSize:20,
          marginLeft:10,
          marginTop:10,
        }}>
          *Hostel Prices
        </Text>

        <Text style={{
          color:'#10324d',
          fontSize:20,
          marginLeft:10,
          marginTop:10,
        }}>
          *Hostel Videos
        </Text>

        <Text style={{
          color:'#10324d',
          fontSize:20,
          marginLeft:10,
          marginTop:10,
        }}>
          etc.
        </Text>

        
      </View>
      </View>
      </ScrollView>    

      <Image source={{uri:"https://yt3.googleusercontent.com/wTqlprE_oyfVy_JRxo9Uo1AZIebVPqrgS7iLODJL-XO8T8EV2XHxOAYI6qikICsCOggUzosp-A=s176-c-k-c0x00ffffff-no-rj"}} style={{
        height: 250,
        width:355,
        backgroundColor: '#10324d',
        marginTop: 30,
        borderRadius:10,
        marginHorizontal:10,
      }}>
      </Image>

      <View style={{
        height: 50,
        marginHorizontal:10,
        backgroundColor: '#10324d',
        marginTop: 30,
        borderRadius:10,
        marginHorizontal:10,
        alignItems:'center',

      }}>
      <Text style={{
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 10,
        alignSelf: 'center',
        color:'white',
      }}>
        POPULAR HOSTELS
      </Text>

      </View>

    </View>

    </ScrollView>
  );
}

export default HomeScreen

const styles = StyleSheet.create({})