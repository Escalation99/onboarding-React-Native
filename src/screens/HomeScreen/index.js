import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { FormButton } from '../../components'
import { AuthContext } from '../../navigation/AuthProvider'

const HomeScreen = () => {
    const { user, logout } = useContext(AuthContext);
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Welcome{user.uid}</Text>
            <FormButton buttonTitle="Logout" onPress={() => logout()} />
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f9fafd',
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        padding: 20,
    },
    text: {
        fontSize: 20,
        color: '#333333',
        textAlign: 'center'
    }
})
