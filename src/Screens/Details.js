//  ----- import react
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, { useState } from 'react';
// ----- Import Customcomponent
import GoBack from '../Component/GoBack';

// ----- Main component
const Details = (routes) => {
  const IMAGE = routes?.route?.params?.image
  const PRICE = routes?.route?.params?.price
  const TITLE = routes?.route?.params?.title
  console.log('>>>>>>>>>>>>',routes?.navigation);

  const [cart, setCart] = useState(0)

  //   Main View
  return (
    <View>
      {/* Header */}
      <View style={styles.Header}>
        <GoBack onPress={() => routes?.navigation.goBack()}/>
        <Text style={styles.HeaderTitle}>Details</Text>
        <TouchableOpacity>
          <Image
            source={require('../Assets/SignOut.png')}
            style={styles.signoutIcon}
          />
        </TouchableOpacity>
      </View>

      {/* Product Details */}
      <View style={{backgroundColor: '#f1faeb'}}>
        <Image
          source={IMAGE}
          style={styles.Product_image}
        />
      </View>
      <View style={{padding: 20}}>
        {/* Product Title And Description */}
        <View style={styles.ProductTitle}>
          <View>
            <Text style={{fontSize: 20, fontWeight: '800'}}>
              {TITLE}
            </Text>
            <Text style={{fontWeight: '400'}}>Product Weight: 28oz</Text>
          </View>
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Image
              style={{height: 25, width: 25, resizeMode: 'contain'}}
              source={require('../Assets/Like_Product.png')}
            />
            <Text style={{fontSize: 10}}>1.2k Likes</Text>
          </View>
        </View>

        {/* Add or Remove Item */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingVertical: 5,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingVertical: 15,
            }}>
            <TouchableOpacity onPress={()=> 
              {
                cart > 0 ? setCart(cart-1) : null}}>
              <Image source={require('../Assets/RemoveItem.png')} />
            </TouchableOpacity>
            <View
              style={{
                borderWidth: 1,
                alignItems: 'center',
                justifyContent: 'center',
                marginHorizontal: 20,
                borderColor: 'gray',
                height: 40,
                width: 40,
                borderRadius: 10,
              }}>
              <Text style={{fontSize: 17, fontWeight: '800'}}>{cart}</Text>
            </View>
            <TouchableOpacity onPress={()=> setCart(cart+1)}>
              <Image source={require('../Assets/AddItem.png')} />
            </TouchableOpacity>
          </View>
          <Text style={{fontSize: 25, fontWeight: '700', color: '#83d654'}}>
            {PRICE}
          </Text>
        </View>

        {/* Border Line */}
        <View
          style={{
            borderWidth: 0.5,
            borderColor: 'gray',
          }}
        />

        {/* Products Details */}
        <View
          style={{
            marginVertical: 12,
          }}>
          <Text style={{fontSize: 18, fontWeight: '700'}}>Product Details</Text>
          <Text style={{fontSize: 15}}>
            Our Recipe stars Navy Beans With A Rich Sauce Of Tasty Molasses,
            Blended With BrawnSugar, Park And Our Own Blend Of Soice
          </Text>
        </View>

        {/* Border Line */}
        <View
          style={{
            borderWidth: 0.5,
            borderColor: 'gray',
          }}
        />
        <View
          style={{
            marginTop: 10,
            borderWidth: 0.5,
            borderColor: 'gray',
          }}
        />
      </View>
      
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  Header: {
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  HeaderTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#83d654',
  },
  signoutIcon: {
    height: 25,
    width: 25,
  },
  Product_image: {
    resizeMode: 'center',
    height: 180,
    width: 180,
    alignSelf: 'center',
  },
  ProductTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
