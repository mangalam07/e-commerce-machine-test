// ----- import react
import React from 'react'
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native'

//  ----- main component
const Button = ({ Button, onPress }) => {
    // ----- main view
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.Container}>
                <Text style={styles.ButtonText}>{Button}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default Button;
// styleshetts
const styles = StyleSheet.create({
    Container: {
        backgroundColor: '#43b558',
        borderRadius: 20
    },
    ButtonText: {
        alignSelf: 'center',
        padding: 10,
        color: '#fff',
        fontSize: 20,
        fontWeight: '700'
    }
})