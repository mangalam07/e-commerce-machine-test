// ----- Import Component
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

// ----- Main Component
const Home = ({navigation}) => {
  // ----- Categories List Shown Data
  const CategoriesData = [
    {
      title: 'Vegitable',
      icon: require('../Assets/Vegitable.png'),
      bagcgroundColor: '#99ddf2',
    },
    {
      title: 'Fruits',
      icon: require('../Assets/Fruits.png'),
      bagcgroundColor: '#dfe6b8',
    },
    {
      title: 'Spice',
      icon: require('../Assets/Spice.png'),
      bagcgroundColor: '#d8a4e0',
    },
    {
      title: 'Canned Food',
      icon: require('../Assets/Canned_Food.png'),
      bagcgroundColor: '#a4e0c7',
    },
    {
      title: 'Side Dishesh',
      icon: require('../Assets/Side_Dishesh.png'),
      bagcgroundColor: '#e0bfa4',
    },
  ];

  // ----- List Shown Data
  const ListingData = [
    {
      title: 'Chicken stew',
      price: '$20.00',
      image: require('../Assets/Chicken_stew.png'),
    },
    {
      title: 'Heins Beanz',
      price: '$15.00',
      image: require('../Assets/Heins_Beanz.png'),
    },
    {
      title: 'Tempe',
      price: '$25.00',
      image: require('../Assets/Side_Dishesh.png'),
    },
    {
      title: 'Backed Beans',
      price: '$30.00',
      image: require('../Assets/Chicken_stew.png'),
    },
  ];

  // ----- Change User Name as per Account
  const Username = () => {
    return <Text style={styles.UserName}>Alex Hales</Text>;
  };

  // ----- Categories render Cards
  const rederCategoriesItem = ({item}) => {
    return (
      <TouchableOpacity key={item}>
        <View style={{marginHorizontal: 7}}>
          <View
            style={{
              backgroundColor: item.bagcgroundColor,
              alignSelf: 'center',
              borderRadius: 10,
            }}>
            <Image
              style={{height: 50, width: 50, resizeMode: 'contain'}}
              source={item.icon}
            />
          </View>
          <Text style={{alignSelf: 'center', fontSize: 14, fontWeight: '500'}}>
            {item.title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  // ----- Listing render Cards
  const renderListingData = ({item}) => {
    console.log('item>>>>',item);
    return (
      <TouchableOpacity
        style={{
          borderWidth: 1,
          borderRadius: 15,
          borderColor: '#83d654',
          height: 155,
          width: 170,
          marginHorizontal:10,
          marginBottom:12,
          justifyContent:'center'
        }}
        key={item}
        onPress={() => navigation.navigate('Product_Details', item)}
        >
        <View style={{margin:7}}>
          <Image
            style={{
              resizeMode: 'contain',
              height: 110,
              width: 110,
              alignSelf: 'center',
            }}
            source={item.image}
          />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'flex-end',
              justifyContent: 'space-around',
              // backgroundColor:'red'
            }}>
            <View>
              <Text style={{fontSize: 13, fontWeight: '800'}}>
                {' '}
                {item.title}
              </Text>
              <Text style={{fontSize: 11}}> {item.price}</Text>
            </View>
            <Text style={{fontSize: 20, color: '#83d654'}}>{item.price}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      {/* Header Backgroun */}
      <Image
        style={styles.HeaderImage}
        source={require('../Assets/Login_size_01.png')}
      />

      {/* Main Container for Eliments */}
      <View style={styles.SubContainer}>
        <Text>Hello, {Username()}</Text>
        <Text style={styles.Description}>Find Good Food For A Health Body</Text>
        {/* Container of SearchBar And Filters */}
        <View style={styles.Input_Box_Filter}>
          <TextInput placeholder="Search" style={styles.SearchBar} />
          <TouchableOpacity>
            <View style={styles.FilterBox}>
              <Image
                style={styles.FilterIcon}
                source={require('../Assets/Filter_Icon.png')}
              />
            </View>
          </TouchableOpacity>
        </View>
        {/* Categories  */}
        <View>
          <Text style={styles.Categories}>Categories</Text>
          {
            <FlatList
              data={CategoriesData}
              renderItem={item => rederCategoriesItem(item)}
              keyExtractor={index => index}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          }
        </View>
        {/* Listing */}
        <ScrollView>
        <View>
          <Text style={styles.Categories}>Listing</Text>
          {
            <FlatList
              data={ListingData}
              renderItem={item => renderListingData(item)}
              keyExtractor={index => index}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          }
          {
            <FlatList
              data={ListingData}
              renderItem={item => renderListingData(item)}
              keyExtractor={index => index}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          }
          {
            <FlatList
              data={ListingData}
              renderItem={item => renderListingData(item)}
              keyExtractor={index => index}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          }
        </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  HeaderImage: {
    // alignSelf:'center',
    width: 'auto',
    height: 150,
  },
  UserName: {
    color: '#edd51c',
  },
  SubContainer: {
    margin: 17,
  },
  Description: {
    fontSize: 17,
    fontWeight: '700',
  },
  Input_Box_Filter: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  SearchBar: {
    paddingHorizontal: 20,
    width: '80%',
    borderColor: '#83d654',
    borderWidth: 1.5,
    borderRadius: 17,
    marginVertical: 13,
  },
  FilterBox: {
    borderWidth: 1.5,
    height: 49,
    borderColor: '#83d654',
    alignItems: 'center',
    justifyContent: 'center',
    width: 45,
    borderRadius: 14,
  },
  FilterIcon: {
    width: 20,
    height: 22,
  },
  Categories: {
    fontSize: 17,
    fontWeight: '700',
    marginVertical: 10,
  },
});

{
  /* <TouchableOpacity
          style={{backgroundColor: 'red'}}
          key={item}
          onPress={() => navigation.navigate('Product_Details', item.title)}>
          <View
            style={{
              borderWidth: 1.5,
              borderColor: '#83d654',
              width: '50%',
              height: 150,
              margin: 10,
              borderRadius: 17,
              padding: 10,
            }}>
            <Image
              source={item.image}
              style={{
                alignSelf: 'center',
                resizeMode: 'stretch',
                height: 95,
                width: 95,
              }}
            />
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'flex-end',
                justifyContent: 'space-around',
              }}>
              <View>
                <Text style={{fontSize: 13, fontWeight: '800'}}>
                  {' '}
                  {item.title}
                </Text>
                <Text style={{fontSize: 10}}> {item.price}</Text>
              </View>
              <Text style={{fontSize: 19, color: '#83d654'}}>{item.price}</Text>
            </View>
          </View>
        </TouchableOpacity> */
}
