import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableHighlight,
} from 'react-native';

const MiniSearchBar = ({onSearch, toggleSearchBar}) => {
  const [term, setTerm] = useState();
  const [location, setLocation] = useState();

  const onSearchClick = () => {
    onSearch(term, location);
    toggleSearchBar();
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
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
      </View>
      <TouchableHighlight onPress={onSearchClick}>
        <View style={styles.button}>
          <Text style={styles.text}>Search</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => toggleSearchBar()}>
        <View style={styles.hiddenButton}>
          <Image
            style={styles.image}
            source={require('../../img/upper-arrow.png')}
          />
        </View>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#DFD7C2',
    marginTop: 5,
    marginBottom: 5,
  },
  inputContainer: {
    flexDirection: 'row',
  },
  input: {
    height: 40,
    width: '40%',
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: '#FFFFFF',
  },
  button: {
    height: 40,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#99806C',
    shadowColor: 'black',
    shadowOffset: {height: 3, width: 3},
    shadowOpacity: 0.5,
  },
  text: {
    fontSize: 18,
    fontStyle: 'italic',
  },
  hiddenButton: {
    height: 20,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    opacity: 0.5,
    borderWidth: 2,
    borderRadius: 10,
    margin: 10,
    marginBottom: 0,
  },
  image: {
    height: 25,
    width: 25,
  },
});

export default MiniSearchBar;
