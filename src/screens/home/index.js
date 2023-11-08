import {
    Text,
    SafeAreaView,
    StyleSheet,
    View,
    Image,
    Button,
    ScrollView,
    TouchableOpacity,
    MaterialCommunityIcons,
} from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import Icon from 'react-native-vector-icons/FontAwesome';
import React, { useState } from 'react';
import { PortofolioCard } from '../../components/organism';
import { LoginButton } from '../../components/atomics';

export default function Portofolio() {

    const data = [
        {
            id: 1,
            title: 'Klinik Kita',
            desc: 'Web Design Project',
            img: require('../../assets/trots.png'),
        },
        {
            id: 2,
            title: 'E-Learning',
            desc: 'UI/UX Design',
            img: require('../../assets/descode.png')
        },
        {
            id: 3,
            title: 'Obater',
            desc: 'UI/UX Design',
            img: require('../../assets/obater.png')
        },

    ]

    return (
        <ScrollView style={styles.container}>
            <View style={styles.center}>
                <Image
                    style={styles.avatar}
                    source={require('../../assets/profile.png')}
                />
            </View>
            <Text style={styles.title}>Nanda Bagus Priambodo</Text>
            <Text style={styles.deskripsi}>
                Saya adalah seorang siswa SMK Telkom Purwokerto. Usia saya 17 tahun.
                Saya anak pertama dari tiga bersaudara. Alamat rumah saya terletak di
                Karangwangkal. Hobi saya adalah bermain basket dan kadang mendengarkan
                musik. Saya tertarik dengan design dan juga Coding.
            </Text>
            <LoginButton title={'Selengkapnya'} />
            <Text style={styles.head}>Portofolio saya</Text>

            {
                data.map((item) => {
                    return (
                        <PortofolioCard img={item.img} title={item.title} desc={item.desc} />
                    )
                })
            }
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: '#F5EFE6',
        // alignItems:"center",
        // justifyContent:"center",
        // marginBottom: 50,
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    head: {
        marginTop: 30,
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    deskripsi: {
        paddingTop: 10,
        fontSize: 16,
        textAlign: 'justify',
        marginBottom: 20,
    },
    avatar: {
        justifyContent: 'center',
        marginBottom: 20,
        marginTop: 60,
        width: 200,
        height: 210,
    },
    porto: {
        width: 310,
        height: 185,
        marginTop: 15,
        borderRadius: 8,
    },
    kiw: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 5,
    },
    kow: {
        fontSize: 16,
        fontWeight: 'medium',
        color: 'grey',
        marginTop: -5,
    },
    kow2: {
        fontSize: 16,
        fontWeight: 'medium',
        color: 'grey',
        marginTop: -5,
        marginBottom: 60,
    },
});
