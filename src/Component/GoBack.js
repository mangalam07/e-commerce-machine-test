// ----- import React
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

// ----- main component
const GoBack = ({ onPress }) => {

    // ----- main view
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.Container}>
                <Image style={styles.IamgeIcon} source={require("../Assets/Goback.png")} />
            </View>
        </TouchableOpacity>
    )
}

export default GoBack;

// ----- stylesheets
const styles = StyleSheet.create({
    Container: {
        marginVertical: 20,
        justifyContent: 'flex-start'
    },
    IamgeIcon: {
        height: 30,
        width: 19,
        borderColor: '#43b558'
    }
})
