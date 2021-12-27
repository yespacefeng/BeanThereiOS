import React from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';

import ReviewEntry from './ReviewEntry';

const last3Reviews = reviews => {
  let result = [];
  for (let i = 0; i < 3 && i < reviews.length; i++) {
    result.push(reviews[i]);
  }
  return result;
};

const RecentReviews = ({reviews}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recent Reviews</Text>
      {last3Reviews(reviews).map((review, key) => (
        <ReviewEntry review={review} key={key} />
      ))}
      <TouchableHighlight>
        <Text>See more...</Text>
      </TouchableHighlight>
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
  title: {
    fontSize: 24,
  },
});

export default RecentReviews;
