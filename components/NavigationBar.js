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

  const onCollectionPress = () => {
    navigation.navigate('Collection');
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
      <TouchableHighlight onPress={() => onCollectionPress()}>
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
    backgroundColor: '#99806C',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 32.5,
  },
  image: {
    width: 40,
    height: 40,
  },
});

export default NavigationBar;
