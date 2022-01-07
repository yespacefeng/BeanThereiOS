import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const Header = ({username}) => {
  return (
    <View style={styles.header}>
      <Image
        style={styles.image}
        source={require('../img/Bean_There_Logo_2.0.png')}
      />
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
    height: 175,
    width: 175,
  },
  name: {
    color: 'white',
    fontSize: 23,
    textAlign: 'left',
  },
});

export default Header;
