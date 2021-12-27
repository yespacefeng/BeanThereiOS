import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

import StarRating from '../General/StarRating';

const ReviewEntry = ({review}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{review.cafeName}</Text>
      <View style={styles.container2}>
        <Text style={styles.drink}>{review.drinkName}</Text>
        <StarRating rating={review.rating} />
      </View>
      <ScrollView style={styles.textContainer}>
        <Text style={styles.text}>{review.text}</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    margin: 5,
    width: '95%',
    borderRadius: 10,
  },
  container2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  drink: {
    fontSize: 18,
    marginLeft: 5,
  },
  textContainer: {
    backgroundColor: '#D4C1A6',
    height: 50,
    borderRadius: 10,
    margin: 5,
  },
  text: {
    fontSize: 12,
    margin: 5,
  },
});

export default ReviewEntry;
