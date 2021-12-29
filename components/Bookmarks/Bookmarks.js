import React from 'react';
import {Text, StyleSheet, SafeAreaView, ScrollView} from 'react-native';

import StoreEntry from '../General/StoreEntry';

const Bookmarks = ({userBookmarks}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Your Bookmarks</Text>
        {userBookmarks.map(store => (
          <StoreEntry store={store} key={store.id} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#DFD7C2',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default Bookmarks;
