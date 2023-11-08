import { Text, View, SafeAreaView, StyleSheet, Image, Button, Alert, TouchableOpacity, ScrollView, TextInput, Pressable } from 'react-native';
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/AntDesign';

function LikeButton() {
    const [likes, setLikes] = useState(0);
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        if (isClicked) {
            setLikes(likes + 1);
        } else {
            setLikes(likes + 1);
        }
        setIsClicked(!isClicked);
    };

    return (
        <View style={{ justifyContent: 'center', marginHorizontal: 10 }}>
            <TouchableOpacity onPress={handleClick} style={styles.container}>
                <Icon
                    style={styles.icon}
                    name={isClicked ? 'like1' : 'like2'}
                    size={24}
                    color={isClicked ? '#3B95FF' : '#000000'}
                />
                <Text>{likes}</Text>
            </TouchableOpacity>
        </View>
    )
}

export { LikeButton }

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