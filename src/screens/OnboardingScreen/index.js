import React from 'react'
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native'
import Onboarding from 'react-native-onboarding-swiper';
import { OnboardingImage1, OnboardingImage2, OnboardingImage3 } from '../../assets'

const LoginScreen = ({ navigation }) => {

    const Skip = ({ ...props }) => (
        <Button title="Skip" color="black" {...props} />
    )

    const Next = ({ ...props }) => (
        <Button title="Next" color="black" {...props} />
    )
    const Done = ({ ...props }) => (
        <TouchableOpacity style={{ marginHorizontal: 10 }} {...props}>
            <Text style={{ fontSize: 14 }}>Done</Text>
        </TouchableOpacity>
    )
    const Dots = ({ selected }) => {
        let backgroundColor;
        backgroundColor = selected ? 'rgba(0,0,0,0.8)' : 'rgba(0,0,0,0.3)'

        return (
            <View style={{ width: 10, height: 5, marginHorizontal: 3, backgroundColor }}>

            </View>
        )
    }

    return (
        <Onboarding
            onSkip={() => navigation.replace('Login')}
            onDone={() => navigation.navigate('Login')}
            SkipButtonComponent={Skip}
            NextButtonComponent={Next}
            DoneButtonComponent={Done}
            DotComponent={Dots}

            pages={[
                {
                    backgroundColor: '#a6e4d0',
                    image: <Image source={OnboardingImage1} />,
                    title: 'Connect to the World',
                    subtitle: 'A New Way to Connect With The World',
                },
                {
                    backgroundColor: '#fdeb93',
                    image: <Image source={OnboardingImage2} />,
                    title: 'Share Your Favorites',
                    subtitle: 'Share Your Thoughts With Similar Kind of People',
                },
                {
                    backgroundColor: '#e9bcbe',
                    image: <Image source={OnboardingImage3} />,
                    title: 'Become The Star',
                    subtitle: 'Let The Spotlight Capture You',
                },
            ]}
        />
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})
