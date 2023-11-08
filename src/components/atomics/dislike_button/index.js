import { Text, View, SafeAreaView, StyleSheet, Image, Button, Alert, TouchableOpacity, ScrollView, TextInput, Pressable } from 'react-native';
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/AntDesign';

function DislikeButton() {
    const [dislike, setDislike] = useState(0);
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        if (isClicked) {
            setDislike(dislike - 1);
        } else {
            setDislike(dislike + 1);
        }
        setIsClicked(!isClicked);
    };

    return (
        <View style={{ justifyContent: 'center', marginHorizontal: 5 }}>
            <TouchableOpacity onPress={handleClick} style={styles.container}>
                <Icon
                    style={styles.icon}
                    name={isClicked ? 'dislike1' : 'dislike2'}
                    size={24}
                    color={isClicked ? 'red' : '#000000'}
                />
                <Text>{dislike}</Text>
            </TouchableOpacity>
        </View>
    )
}

export { DislikeButton }

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    icon: {
        padding: 2
    }
})