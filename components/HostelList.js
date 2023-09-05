import React from 'react';
import { TouchableOpacity, Pressable, Text, Image, View, StyleSheet, ScrollView } from 'react-native';
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";


const HostelList = ({ onPress, imageUrl, title, ratings, location, hostelImage, room1, room2, room3, room4, navigation, screenName }) => {
    const handlePress = () => {
        if (onPress) {
            onPress();
        }

        if (navigation && screenName) {
            navigation.navigate(screenName);
        }
    };

    return (
        <Pressable onPress={handlePress}
            style={{
                flexDirection: 'row',
                height: 200,
                backgroundColor: 'white',
                borderRadius: 5,
                marginTop: 10,
                borderColor: 'white',
                borderWidth: 1,
            }}>

            <Image source={{ uri: imageUrl }}
                style={{ width: 150, height: 200, }} />

            <View style={{ padding: 10 }}>
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                    <Text style={{ fontWeight: 'bold', fontSize:20, }}>
                        {title}
                    </Text>
                    <AntDesign name="hearto" size={24} color="red" />
                </View>
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 25,
                        marginTop: 7,
                    }}
                >
                    <MaterialIcons name="stars" size={24} color="gold" />
                    <Text>{ratings}</Text>
                    <View
                        style={{
                            backgroundColor: "#6CB4EE",
                            paddingVertical: 3,
                            borderRadius: 5,
                            width: 100,
                        }}
                    >
                        <Text
                            style={{ textAlign: "center", color: "white", fontSize: 15 }}
                        >
                            {location}
                        </Text>
                    </View>
                </View>
                <View
                    style={{
                        backgroundColor: "White",
                        paddingVertical: 3,
                        width: 210,
                        marginTop: 10,
                        height: 124,
                        borderColor: "white",
                        borderTopColor: "black",
                        borderWidth: 2,
                    }}
                >
                    <Text
                        style={{ textAlign: "center", color: "black", fontSize: 18, fontWeight: "bold", }}
                    >
                        Available Rooms
                    </Text>

                    <Text
                        style={{ textAlign: "left", color: "grey", fontSize: 18, marginTop: 10, }}
                    >
                        {room1}
                    </Text>

                    <Text
                        style={{ textAlign: "left", color: "grey", fontSize: 18, marginTop: 10, }}
                    >
                        {room2}
                    </Text>

                    <Text
                        style={{ textAlign: "left", color: "grey", fontSize: 18, marginTop: 10, }}
                    >
                        {room3}
                    </Text>

                    <Text
                        style={{ textAlign: "left", color: "grey", fontSize: 18, marginTop: 10, }}
                    >
                        {room4}
                    </Text>


                </View>
            </View>
        </Pressable>
    );
};


export default HostelList;
