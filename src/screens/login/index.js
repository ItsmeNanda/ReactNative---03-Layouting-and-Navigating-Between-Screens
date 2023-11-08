import { Text, View, SafeAreaView, StyleSheet, Image, Button, Alert, TouchableOpacity, ScrollView, TextInput, Pressable } from 'react-native';
import React, { useState } from 'react';
import { FormText } from '../../components/atomics'
import { FormPassword } from '../../components/atomics'
import { LoginButton } from '../../components/atomics';


export default function Login({ navigation }) {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('');
	return (
		<ScrollView>
			<View style={styles.container}>
				<View style={styles.logoContainer}>
					<Image style={styles.logoImg} source={require('../../assets/logo.png')} />
				</View>
				<View style={styles.textContainer}>
					<Text style={styles.heading2}>Hello,</Text>
					<Text style={styles.subheading3}>Masuk untuk melanjutkan</Text>
				</View>

				<View style={{ flex: 1 }}>
					<FormText placeholder='username' value={username} onChangeText={setUsername} />
					<FormPassword placeholder='password' value={password} onChangeText={setPassword} />

					<TouchableOpacity>
						<Text style={{ fontWeight: 'light', color: 'grey', marginBottom: 20, marginTop: 10, alignSelf: 'flex-end' }}>Lupa Password?</Text>
					</TouchableOpacity>
				</View>

				<View style={{ flex: 1 }}>
					<LoginButton title={'Masuk'} onPress={() => navigation.navigate('Home')} />
					<View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 32 }}>
						<View style={{ flex: 1, height: 1, backgroundColor: 'grey' }} />
						<View>
							<Text style={{ width: 50, textAlign: 'center', color: 'grey' }}>Atau</Text>
						</View>
						<View style={{ flex: 1, height: 1, backgroundColor: 'grey' }} />
					</View>
				</View>

				<View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 16, }}>
					<Text style={{ fontSize: 13, paddingRight: 2 }}>Belum Punya Akun?</Text>
					<TouchableOpacity onPress={() => navigation.navigate('Register')}><Text style={{ fontSize: 14, fontWeight: 600, color: '#638CCE' }}>Daftar sekarang</Text></TouchableOpacity>
				</View>

			</View>
		</ScrollView >
	)
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
		justifyContent: 'center'
	},
	textContainer: {
		marginTop: 24,
		marginBottom: 12,
	},
	formContainer: {
		flex: 1,
		marginTop: 1,
	},
	logoImg: {
		height: 50,
		width: 50,
		resizeMode: 'contain',
		alignSelf: 'center',
		justifyContent: 'center'
	},
	registerButton: {
		alignItems: 'center',
		justifyContent: 'center',
		paddingVertical: 16,
		paddingHorizontal: 32,
		borderRadius: 10,
		backgroundColor: '#F4F9FF',
		marginTop: 32,
		borderWidth: 0.5,
		borderColor: 'grey',
	},
	// heading1: {
	//   color: 'black',
	//   fontWeight: 'bold',
	//   justifyContent: 'center',
	//   fontSize: 32,
	// },
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
		marginTop: 10
	},

})