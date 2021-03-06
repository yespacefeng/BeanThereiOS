import React from 'react';
import {View, StyleSheet, Image, TouchableHighlight} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const NavigationBar = ({stores, isLoggedIn}) => {
  const navigation = useNavigation();

  const onHomePress = () => {
    if (stores.length > 0) {
      navigation.navigate('SearchResult');
    } else {
      navigation.navigate('Home');
    }
  };

  const onProfilePress = () => {
    navigation.navigate('Profile');
    if (!isLoggedIn) {
      navigation.navigate('LogIn');
    }
  };

  const onBookmarksPress = () => {
    navigation.navigate('Bookmarks');
    if (!isLoggedIn) {
      navigation.navigate('LogIn');
    }
  };

  const onMenuPress = () => {
    navigation.navigate('Menu');
    if (!isLoggedIn) {
      navigation.navigate('LogIn');
    }
  };

  return (
    <View style={styles.container}>
      <TouchableHighlight onPress={() => onHomePress()}>
        <Image style={styles.image} source={require('../img/home.png')} />
      </TouchableHighlight>
      <TouchableHighlight onPress={() => onProfilePress()}>
        <Image style={styles.image} source={require('../img/profile.png')} />
      </TouchableHighlight>
      <TouchableHighlight onPress={() => onBookmarksPress()}>
        <Image style={styles.image} source={require('../img/save.png')} />
      </TouchableHighlight>
      <TouchableHighlight onPress={() => onMenuPress()}>
        <Image style={styles.image} source={require('../img/menu.png')} />
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 75,
    zIndex: 999,
    backgroundColor: '#DFD7C2',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    shadowColor: 'black',
    shadowOffset: {height: -2, width: 0},
    shadowOpacity: 0.25,
  },
  image: {
    width: 40,
    height: 40,
    margin: 25,
    marginTop: 10,
  },
});

export default NavigationBar;
