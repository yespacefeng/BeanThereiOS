import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const Header = ({username}) => {
  return (
    <View style={styles.header}>
      <Image style={styles.image} source={require('../img/Bean_There.png')} />
      <Text style={styles.greeting}>Welcome, {username}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    padding: 15,
    backgroundColor: '#99806C',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image: {
    height: 50,
    width: 50,
  },
  name: {
    color: 'white',
    fontSize: 23,
    textAlign: 'left',
  },
});

export default Header;
