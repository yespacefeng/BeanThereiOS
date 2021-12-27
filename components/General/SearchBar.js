import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableHighlight,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const SearchBar = ({onSearch}) => {
  const navigation = useNavigation();
  const [term, setTerm] = useState();
  const [location, setLocation] = useState();

  const onSearchClick = () => {
    onSearch(term, location);
    navigation.navigate('SearchResult');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setTerm}
        value={term}
        placeholder="Store Name"
      />
      <TextInput
        style={styles.input}
        onChangeText={setLocation}
        value={location}
        placeholder="Location"
      />
      <TouchableHighlight onPress={onSearchClick}>
        <View style={styles.button}>
          <Text style={styles.text}>Search</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#DFD7C2',
  },
  input: {
    height: 40,
    width: '80%',
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: '#FFFFFF',
  },
  button: {
    height: 50,
    width: 150,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#99806C',
    shadowColor: 'black',
    shadowOffset: {height: 3, width: 3},
    shadowOpacity: 0.5,
  },
  text: {
    fontSize: 24,
    fontStyle: 'italic',
  },
});

export default SearchBar;
