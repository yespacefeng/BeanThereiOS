import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableHighlight,
} from 'react-native';

import MiniSearchBar from './MiniSearchBar';
import StoreDetails from './StoreDetails';
import StoreEntry from '../General/StoreEntry';

const SearchResult = ({
  stores,
  onSearch,
  onStorePress,
  currentCafe,
  closeStoreDetailClick,
}) => {
  const [visible, setVisible] = useState(false);

  const toggleSearchBar = () => {
    setVisible(!visible);
  };

  return (
    <View style={styles.container}>
      {visible ? (
        <MiniSearchBar onSearch={onSearch} toggleSearchBar={toggleSearchBar} />
      ) : (
        <TouchableHighlight
          style={styles.search}
          onPress={() => toggleSearchBar()}>
          <Text style={styles.text}>Search</Text>
        </TouchableHighlight>
      )}
      {currentCafe && (
        <StoreDetails
          currentCafe={currentCafe}
          closeStoreDetailClick={closeStoreDetailClick}
        />
      )}
      <SafeAreaView style={styles.safeArea}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.innerContainer}>
            {stores.map(store => (
              <StoreEntry
                store={store}
                onStorePress={onStorePress}
                key={store.id}
              />
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
    marginTop: 10,
  },
  storeDetails: {
    flex: 1,
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
