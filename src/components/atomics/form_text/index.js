import { Text, View, StyleSheet, TextInput, Props } from 'react-native';
import React, { useState } from 'react';

function FormText({ placeholder, value, onChangeText }) {
    return (
        <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            placeholder={placeholder}
            value={value}
        />
    );
}

export { FormText }

const styles = StyleSheet.create({
    input: {
        marginTop: 10,
        height: 60,
        color: 'grey',
        borderWidth: 1,
        borderRadius: 10,
        paddingLeft: 30,
        borderColor: 'grey',
    },
});
