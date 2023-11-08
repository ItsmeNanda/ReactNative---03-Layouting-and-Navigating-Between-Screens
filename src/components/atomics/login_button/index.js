import { Text, View, SafeAreaView, StyleSheet, Image, Button, Alert, TouchableOpacity, ScrollView, TextInput, Pressable } from 'react-native';
import React, { useState } from 'react';

function LoginButton({ onPress, title }) {
    return (
        <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    )
}

export { LoginButton }

const styles = StyleSheet.create({
    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 16,
        paddingHorizontal: 32,
        borderRadius: 10,
        elevation: 3,
        backgroundColor: '#3B95FF',
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white'
    }
});