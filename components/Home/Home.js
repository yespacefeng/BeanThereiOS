import React from 'react';
import {View, StyleSheet} from 'react-native';

import SearchBar from '../General/SearchBar';

const Home = ({onSearch}) => {
  return (
    <View style={styles.container}>
      <SearchBar onSearch={onSearch} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Home;
