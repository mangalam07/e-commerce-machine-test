// ----- import react 
import { StyleSheet, View, Image } from 'react-native'
import React from 'react'

// ----- import custom(common) component
import Descriptions from '../Component/Descriptions'
import Button from '../Component/Button'
import GoBack from '../Component/GoBack'

// ----- Main component
const Onboarding_screen_02 = ({ navigation }) => {

    // ----- Main View
    return (
        <View style={styles.Container}>

            {/* GoBack header */}
            <GoBack onPress={() => navigation.goBack()} />

            {/* Icon */}
            <Image source={require('../Assets/Delivery_onboard.png')} style={styles.Image} />

            {/* --- description component --- */}
            <View style={styles.description}>
                <Descriptions Title={"Easy Payment"} />
            </View>

            {/* --- Buuton component --- */}
            <Button Button={"Next"}
                onPress={() => navigation.navigate('Onboarding_delivery')}
            />

        </View>
    )
}

export default Onboarding_screen_02

// ----- Stylesheets
const styles = StyleSheet.create({
    Container: {
        flex: 1,
        marginHorizontal: 20
    },
    description: {
        marginTop: 32
    },
    Image:{width:'100%',height:'45%'}
})