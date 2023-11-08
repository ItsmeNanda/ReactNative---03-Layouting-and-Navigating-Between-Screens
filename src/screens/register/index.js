import {
    Text,
    View,
    SafeAreaView,
    StyleSheet,
    Image,
    Button,
    Alert,
    TouchableOpacity,
    ScrollView,
    TextInput,
    Pressable,
} from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { FormText } from '../../components/atomics';
import { FormPassword } from '../../components/atomics';


export default function Register({ navigation }) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('');
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image style={styles.logoImg} source={require('../../assets/logo.png')} />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.heading2}>Silahkan Daftar</Text>
                    <Text style={styles.subheading3}>Daftar Untuk Melanjutkan</Text>
                </View>

                <View style={{ flex: 1 }}>
                    <View>
                        <FormText placeholder='username' value={username} onChangeText={setUsername} />
                        <FormText placeholder='Email' value={username} onChangeText={setUsername} />
                        <FormPassword placeholder='Password' value={password} onChangeText={setPassword} />
                        <FormPassword placeholder='Ulangi Password' value={password} onChangeText={setPassword} />
                    </View>
                </View>

                <View>
                    <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Login')}>
                        <Text style={{ fontSize: 16, fontWeight: 500, color: 'white' }}>
                            Daftar
                        </Text>
                    </TouchableOpacity>
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 16,
                    }}>
                    <Text style={{ fontSize: 13, paddingRight: 2 }}>
                        Sudah Punya Akun?
                    </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}><Text style={{ fontSize: 14, fontWeight: 600, color: '#638CCE' }}>
                        Masuk sekarang
                    </Text></TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
    },
    logoContainer: {
        marginTop: 20,
        flex: 1,
        width: 90,
        height: 90,
        backgroundColor: '#FE5B6E',
        borderRadius: 10,
        justifyContent: 'center',
    },
    textContainer: {
        marginTop: 24,
        marginBottom: 12,
    },
    input: {
        marginTop: 10,
        height: 60,
        color: 'grey',
        borderWidth: 1,
        borderRadius: 10,
        paddingLeft: 30,
        borderColor: 'grey',
    },
    input2: {
        flex: 1,
        height: 40,
    },
    inputPassword: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        height: 60,
        color: 'grey',
        borderWidth: 1,
        borderRadius: 10,
        paddingLeft: 30,
        borderColor: 'grey',
    },
    icon: {
        padding: 10,
        paddingRight: 30,
    },
    logoImg: {
        height: 50,
        width: 50,
        resizeMode: 'contain',
        alignSelf: 'center',
        justifyContent: 'center',
    },
    loginButton: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 16,
        paddingHorizontal: 32,
        borderRadius: 10,
        elevation: 3,
        backgroundColor: '#3B95FF',
        marginTop: 32,
    },
    heading2: {
        color: 'black',
        fontWeight: 'bold',
        justifyContent: 'center',
        fontSize: 28,
    },
    subheading3: {
        color: 'black',
        fontWeight: 'light',
        fontSize: 14,
        marginTop: 10,
    },
});
