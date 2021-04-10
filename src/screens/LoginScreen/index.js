import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const OnboardingScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Login Screen</Text>
            <Button title="Click Here" onPress={() => console.warn('ButtonClicked')} />
        </View>
    )
}

export default OnboardingScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})
