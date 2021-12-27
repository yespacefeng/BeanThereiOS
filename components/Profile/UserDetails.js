import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const UserDetails = ({username, numberOfReviews, numberOfLikes}) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.profilePicture}
        source={require('../../img/profile.png')}
      />
      <Text style={styles.username}>{username}</Text>
      <View style={styles.container2}>
        <Image style={styles.image} source={require('../../img/archive.png')} />
        <Text>{numberOfReviews}</Text>
        <Image style={styles.image} source={require('../../img/like.png')} />
        <Text>{numberOfLikes}</Text>
      </View>
      <View style={styles.container3}>
        <Image
          style={styles.image2}
          source={require('../../img/archive.png')}
        />
        <Image
          style={styles.image2}
          source={require('../../img/setting.png')}
        />
        <Image
          style={styles.image2}
          source={require('../../img/approve.png')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D4C1A6',
    margin: 5,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: {height: 3, width: 3},
    shadowOpacity: 0.5,
  },
  container2: {
    flexDirection: 'row',
    alignItems: 'space-between',
  },
  container3: {
    flexDirection: 'row',
    alignItems: 'space-between',
  },
  username: {
    fontSize: 24,
    margin: 10,
  },
  image: {
    height: 25,
    width: 25,
  },
  image2: {
    height: 50,
    width: 50,
    marginTop: 20,
    marginBottom: 10,
    marginLeft: 15,
    marginRight: 15,
  },
});

export default UserDetails;
