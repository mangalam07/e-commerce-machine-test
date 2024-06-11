// ----- import react
import React from 'react'
import { StyleSheet, Image, View } from 'react-native'

// ----- import custom(Common) component
import GoBack from '../Component/GoBack';
import Descriptions from '../Component/Descriptions';
import Button from '../Component/Button';

// ----- Main Component
const Onboarding_screen_03 = ({ navigation }) => {

  // ----- Main View
  return (
    <View style={styles.Container}>

      {/* GoBack header */}
      <GoBack onPress={() => navigation.goBack()} />

      {/* Icon */}
      <Image source={require('../Assets/DeliveryIcon.png')} style={{ height: '49%' }} />

      {/* --- description component --- */}
      <Descriptions Title={"Fast Delivery"} />

      {/* --- Buuton component --- */}
      <Button Button={"Next"}
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  )
}

export default Onboarding_screen_03;

// ----- Stylesheets
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    marginHorizontal: 20
  }
})