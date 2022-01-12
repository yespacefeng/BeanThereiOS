import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const Header = ({username}) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../img/Bean_There_Logo_2.0.png')}
      />
      <Text style={styles.greeting}>Welcome, {username}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    padding: 5,
    zIndex: 999,
    backgroundColor: '#DFD7C2',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: {height: 2, width: 0},
    shadowOpacity: 0.25,
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
