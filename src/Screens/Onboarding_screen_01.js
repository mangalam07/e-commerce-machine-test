// import react 
import React from 'react'
import { StyleSheet, View, Image } from 'react-native'

// ----- Custom componet
import Button from '../Component/Button'
import Descriptions from '../Component/Descriptions'

// ----- main component
const Onboarding_screen_01 = ({ navigation }) => {

    // --- main view
    return (
        <View style={styles.Container}>

            {/* Icon Food */}
            <Image source={require('../Assets/Food_Order_Icon.png')} />

            {/* --- description component --- */}
            <Descriptions Title={"Order for Food"} />

            {/* --- Buuton component --- */}
            <Button Button={"Next"} onPress={() => navigation.navigate('Onboarding_payment')} />
        </View>
    )
}

export default Onboarding_screen_01

// ------ stylesheet
const styles = StyleSheet.create({
    Container: {
        flex: 1,
        marginHorizontal: 20
    }
})