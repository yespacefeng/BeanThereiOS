import React from 'react';
import {View, Text, Image, StyleSheet, TouchableHighlight} from 'react-native';

import StarRating from './StarRating';

const StoreEntry = ({store}) => {
  const onEntryPress = () => {
    console.log(store.name);
  };

  const imageVerification = () => {
    if (store.image_url === '') {
      return (
        <Image
          style={styles.image}
          source={require('../../img/no-photo.png')}
        />
      );
    } else {
      return (
        <Image
          style={styles.image}
          source={{
            uri: store.image_url,
          }}
        />
      );
    }
  };

  const addressFormat = () => {
    let location = store.location;
    return `${location.address1}\n${location.city}, ${location.state}, ${location.zip_code}`;
  };

  const phoneNumberFormat = () => {
    let phone = store.phone;
    return `(${phone.slice(2, 5)})-${phone.slice(5, 8)}-${phone.slice(8)}`;
  };

  return (
    <TouchableHighlight style={styles.container} onPress={() => onEntryPress()}>
      <View style={styles.innerContainer}>
        <View style={styles.imgContainer}>{imageVerification()}</View>
        <View style={styles.infoContainer}>
          <Text style={styles.storeName}>{store.name}</Text>
          <StarRating style={styles.rating} rating={store.rating} />
          <View style={styles.bottom}>
            <Text style={styles.address}>{addressFormat()}</Text>
            <Text style={styles.phone}>{phoneNumberFormat()}</Text>
          </View>
        </View>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 90,
    width: '95%',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    margin: 5,
    shadowColor: 'black',
    shadowOffset: {height: 3, width: 3},
    shadowOpacity: 0.5,
  },
  innerContainer: {
    flexDirection: 'row',
  },
  imgContainer: {
    width: '20%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoContainer: {
    width: '80%',
    alignItems: 'center',
  },
  image: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 50,
    borderWidth: 2,
    borderRadius: 50,
    margin: 5,
  },
  top: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 5,
  },
  bottom: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    margin: 5,
    marginTop: 0,
  },
  storeName: {
    fontSize: 18,
    fontWeight: 'bold',
    overflow: 'hidden',
  },
  rating: {
    marginLeft: 5,
  },
  address: {
    fontSize: 12,
  },
});

export default StoreEntry;
