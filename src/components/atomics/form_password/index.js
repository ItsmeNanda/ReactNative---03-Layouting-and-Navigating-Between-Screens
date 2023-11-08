import { Text, View, SafeAreaView, StyleSheet, Image, Button, Alert, TouchableOpacity, ScrollView, TextInput, Pressable } from 'react-native';
import react, { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function FormPassword({ placeholder, value, onChangeText, }) {

    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    }

    return (
        <View style={styles.formContainer}>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={value}
                placeholder={placeholder}
                secureTextEntry={!showPassword ? true : false}
            />
            <TouchableOpacity onPress={toggleShowPassword} style={styles.icon} >
                <Icon
                    name={showPassword ? 'eye' : 'eye-off'}
                    size={24}
                    color="#888"
                    style={styles.icon}
                />
            </TouchableOpacity>
        </View>
    )
}

export { FormPassword };


const styles = StyleSheet.create({
    formContainer: {
        marginTop: 16,
        justifyContent: 'center',
        flexDirection: 'coloumn',
    },
    input: {
        height: 60,
        color: 'black',
        borderWidth: 1,
        borderRadius: 10,
        paddingLeft: 30,
        borderColor: 'grey',
    },
    icon: {
        position: 'absolute',
        alignSelf: 'flex-end',
        paddingBottom: 25,
        paddingEnd: 15
    },
});