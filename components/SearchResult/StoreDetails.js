import React from 'react';
import {View, Text, Image, StyleSheet, TouchableHighlight} from 'react-native';

import StarRating from '../General/StarRating';

const StoreDetails = ({currentCafe, closeStoreDetailClick}) => {
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
        <Text>Recent Reviews</Text>
      </View>
      <TouchableHighlight onPress={() => closeStoreDetailClick()}>
        <View style={styles.closeButton}>
          <Text>Close</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
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
    marginLeft: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  closeButton: {
    height: 20,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    opacity: 0.5,
    borderWidth: 2,
    borderRadius: 10,
    margin: 10,
    marginBottom: 0,
  },
});

export default StoreDetails;
