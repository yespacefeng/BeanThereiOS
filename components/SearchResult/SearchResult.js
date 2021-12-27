import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableHighlight,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import StoreEntry from '../General/StoreEntry';

const SearchResult = ({stores}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableHighlight
        style={styles.search}
        onPress={() => navigation.navigate('Home')}>
        <Text style={styles.text}>Search</Text>
      </TouchableHighlight>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.innerContainer}>
            {stores.map(store => (
              <StoreEntry store={store} key={store.id} />
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#DFD7C2',
  },
  innerContainer: {
    alignItems: 'center',
  },
  search: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: '80%',
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    margin: 5,
  },
  text: {
    fontSize: 24,
    opacity: 0.5,
  },
  safeArea: {
    flex: 1,
    width: '100%',
  },
});

export default SearchResult;
