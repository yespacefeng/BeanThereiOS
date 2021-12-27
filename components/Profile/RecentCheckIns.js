import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const RecentCheckIns = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recent Check-Ins</Text>
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

export default RecentCheckIns;
