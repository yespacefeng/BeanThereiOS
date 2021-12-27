import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

const getStarRating = rating => {
  let result = [];
  for (let i = 0; i < 5; i++) {
    if (rating >= 1) {
      result.push(
        <Image
          style={styles.star}
          source={require('../../img/stars/star.png')}
          key={Math.floor(Math.random() * Date.now()).toString()}
        />,
      );
    } else if (rating >= 0.75) {
      result.push(
        <Image
          style={styles.star}
          source={require('../../img/stars/star-three-quarter.png')}
          key={Math.floor(Math.random() * Date.now()).toString()}
        />,
      );
    } else if (rating >= 0.5) {
      result.push(
        <Image
          style={styles.star}
          source={require('../../img/stars/star-half.png')}
          key={Math.floor(Math.random() * Date.now()).toString()}
        />,
      );
    } else if (rating >= 0.25) {
      result.push(
        <Image
          style={styles.star}
          source={require('../../img/stars/star-one-quarter.png')}
          key={Math.floor(Math.random() * Date.now()).toString()}
        />,
      );
    } else {
      result.push(
        <Image
          style={styles.star}
          source={require('../../img/stars/star-empty.png')}
          key={Math.floor(Math.random() * Date.now()).toString()}
        />,
      );
    }
    rating -= 1;
  }
  return result;
};

const StarRating = ({rating}) => {
  return <View style={styles.container}>{getStarRating(rating)}</View>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginRight: 5,
  },
  star: {
    height: 15,
    width: 15,
  },
});

export default StarRating;
