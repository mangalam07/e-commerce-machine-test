// ----- import react
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

//  ----- main component
const Descriptions = ({ Title }) => {
  //  ----- main view 
  return (
    <View>
      <Text style={styles.Title}>{Title}</Text>
      <Text style={styles.Heading}>Lorem ipsum is simply dummy test of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since</Text>
    </View>
  )
}

export default Descriptions

// styleshetts
const styles = StyleSheet.create({
  Title: {
    fontSize: 38,
    marginBottom: 10,
    fontWeight: '700',
    color: '#43b558',
    alignSelf: 'center'
  },
  Heading: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 15
  }
})