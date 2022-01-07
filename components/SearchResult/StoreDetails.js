import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

import StarRating from '../General/StarRating';

const StoreDetails = ({currentCafe}) => {
  const addressFormat = () => {
    let location = currentCafe.location.display_address;
    return `${location[0]}, ${location[1]}`;
  };

  const phoneNumberFormat = () => {
    let phone = currentCafe.phone;
    return `(${phone.slice(2, 5)})-${phone.slice(5, 8)}-${phone.slice(8)}`;
  };

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Image style={styles.image} source={{uri: currentCafe.image_url}} />
        <View style={styles.topRight}>
          <Text style={styles.name}>{currentCafe.name}</Text>
          <StarRating rating={currentCafe.rating} />
          <Text style={styles.address}>{addressFormat()}</Text>
          <Text style={styles.phone}>{phoneNumberFormat()}</Text>
        </View>
      </View>
      <View style={styles.bottom}>
        <Text>reviews</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '90%',
  },
  top: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bottom: {
    flex: 1,
  },
  topRight: {
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default StoreDetails;
