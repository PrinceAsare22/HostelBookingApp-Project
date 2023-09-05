import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';


const CustomPressable = ({ onPress, title, navigation, screenName }) => {
  const handlePress = () => {
    if (onPress) {
      onPress();
    }

    if (navigation && screenName) {
      navigation.navigate(screenName);
    }
  };

  return (
    <TouchableOpacity onPress={handlePress}
      style={{
        flexDirection:'row',
        height: 50,
        backgroundColor: 'white',
        borderRadius: 5,
        marginTop: 5,
        borderColor: 'white',
        borderWidth: 1,
        borderBottomColor: '#10324d',
      }}>
      <View style={{
        width:100,
        marginTop: 12,
        marginLeft: 10,
      }}>
        <Text style={{
          fontSize: 20,
          fontWeight: 'bold',
          color: 'black',
        }}>
          {title}
        </Text>
      </View>

      <View style={{
        marginTop:10,
        marginLeft:230,
      }}>
        <AntDesign
          name="right"
          size={24}
          color="black"
         />
      </View>
    </TouchableOpacity>
  );
};


export default CustomPressable;
