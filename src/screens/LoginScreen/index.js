import React, { useState, useContext } from 'react'
import { StyleSheet, Text, View, Button, TouchableOpacity, Image } from 'react-native'
import { SocialLogo } from '../../assets'

import { FormButton, FormInput, SocialButton } from '../../components'
import { AuthContext } from '../../navigation/AuthProvider'

const LoginScreen = ({ navigation }) => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const { login } = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <Image source={SocialLogo} style={styles.logo} />
            <Text style={styles.text}>RN Social App</Text>
            <FormInput
                placeholderText="Email"
                iconType="user"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                labelValue={email}
                onChangeText={(userEmail) => setEmail(userEmail)}
            />
            <FormInput
                placeholderText="Password"
                iconType="lock"
                labelValue={password}
                onChangeText={(userPassword) => setPassword(userPassword)}
                secureTextEntry={true}
            />
            <FormButton
                buttonTitle="Sign In"
                onPress={() => login(email, password)}
            />

            <TouchableOpacity style={styles.forgotButton} onPress={() => { alert('forgot password') }}>
                <Text style={styles.navButtonText}>Forgot Password ?</Text>
            </TouchableOpacity>

            <SocialButton
                buttonTitle="Sign In with Facebook"
                btnType="facebook"
                color="#4867aa"
                backgroundColor="#e6eaf4"
                onPress={() => { }}
            />

            <SocialButton
                buttonTitle="Sign In with Google"
                btnType="google"
                color="#de4d41"
                backgroundColor="#f5e7ea"
                onPress={() => { }}
            />

            <TouchableOpacity style={styles.forgotButton} onPress={() => navigation.navigate('Signup')}>
                <Text style={styles.navButtonText}>Don't have an account? Create here</Text>
            </TouchableOpacity>
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        paddingTop: 50,
        backgroundColor: '#f9fafd',
        flex: 1
    },
    logo: {
        height: 150,
        width: 150,
        resizeMode: 'cover',
    },
    text: {
        fontFamily: 'Kufam-SemiBoldItalic',
        fontSize: 28,
        marginBottom: 10,
        color: '#051d5f',
    },
    navButton: {
        marginTop: 15,
    },
    forgotButton: {
        marginVertical: 35,
    },
    navButtonText: {
        fontSize: 18,
        fontWeight: '500',
        color: '#2e64e5',
        fontFamily: 'Lato-Regular',
    },
})
