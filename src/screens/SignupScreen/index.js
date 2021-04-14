import React, { useState } from 'react'
import { StyleSheet, Text, View, Button, TouchableOpacity, Image } from 'react-native'
import { SocialLogo } from '../../assets'

import { FormButton, FormInput, SocialButton } from '../../components'

const SignupScreen = ({ navigation }) => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();


    return (
        <View style={styles.container}>
            <Text style={styles.text}>Create an account</Text>
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
            <FormInput
                placeholderText="Confirm Password"
                iconType="lock"
                labelValue={confirmPassword}
                onChangeText={(userPassword) => setPassword(userPassword)}
                secureTextEntry={true}
            />
            <FormButton
                buttonTitle="Sign In"
                onPress={() => alert('Sign In Clicked')}
            />

            <View style={styles.textPrivate}>
                <Text style={styles.color_textPrivate}>By registering, you confirm that you accept our</Text>
                <TouchableOpacity onPress={() => alert('Terms and Condition')}><Text style={[styles.color_textPrivate, { color: '#e88832' }]}>Terms of service</Text></TouchableOpacity>
                <Text style={styles.color_textPrivate}>and </Text>
                <TouchableOpacity onPress={() => alert('Privacy Policy')}><Text style={[styles.color_textPrivate, { color: '#e88832' }]}>Privacy Policy</Text></TouchableOpacity>
            </View>

            <SocialButton
                buttonTitle="Sign Up with Facebook"
                btnType="facebook"
                color="#4867aa"
                backgroundColor="#e6eaf4"
                onPress={() => { }}
            />

            <SocialButton
                buttonTitle="Sign Up with Google"
                btnType="google"
                color="#de4d41"
                backgroundColor="#f5e7ea"
                onPress={() => { }}
            />

            <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Login')}>
                <Text style={styles.navButtonText}>Have an account? Sign in</Text>
            </TouchableOpacity>

            <View style={{ backgroundColor: 'pink', height: 150 }} />
        </View>
    )
}

export default SignupScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f9fafd',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        paddingTop: 30
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
    navButtonText: {
        fontSize: 18,
        fontWeight: '500',
        color: '#2e64e5',
        fontFamily: 'Lato-Regular',
    },
    textPrivate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginVertical: 35,
        justifyContent: 'center',
    },
    color_textPrivate: {
        fontSize: 13,
        fontWeight: '400',
        fontFamily: 'Lato-Regular',
        color: 'grey',
    },
})
