/* eslint-disable no-unused-vars */
import axios from 'axios';
import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Header from './components/Header';
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';
import Collection from './components/Collection/Collection';
import Menu from './components/Menu/Menu';
import SearchResult from './components/SearchResult/SearchResult';
import LogIn from './components/General/LogIn';
import SignUp from './components/General/SignUp';
import NavigationBar from './components/NavigationBar';

import API_KEYS from './config.js';

const Stack = createNativeStackNavigator();
const url = 'https://api.yelp.com/v3/businesses/search?';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('Guest');
  const [reviews, setReviews] = useState([]);
  const [checkIns, setCheckIns] = useState([]);
  const [numberOfReviews, setNumberOfReviews] = useState(0);
  const [numberOfLikes, setNumberOfLikes] = useState(0);
  const [stores, setStores] = useState([]);
  const [userCollection, setUserCollection] = useState([]);
  const [limit, setLimit] = useState(20);

  const onSearch = (term, location) => {
    term = term || 'coffee';
    location = location || 'Albany, NY';
    axios
      .get(`${url}term=${term}&location=${location}&limit=${limit}`, {
        headers: {
          'content-type': 'application/json',
          Authorization: API_KEYS.yelp,
        },
      })
      .then(result => {
        setStores(result.data.businesses);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const userLogIn = (user, userId) => {
    console.log(user);
    setIsLoggedIn(true);
  };

  const userSignUp = (user, userId) => {
    console.log(user);
    setIsLoggedIn(true);
  };

  const userLogOut = () => {
    setIsLoggedIn(false);
    setUsername('Guest');
  };

  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Header username={username} />
        <Stack.Navigator>
          {/* Main screens */}
          <Stack.Screen name="Home" options={{headerShown: false}}>
            {props => <Home onSearch={onSearch} />}
          </Stack.Screen>
          <Stack.Screen name="Profile" options={{headerShown: false}}>
            {props => (
              <Profile
                username={username}
                numberOfReviews={numberOfReviews}
                numberOfLikes={numberOfLikes}
                reviews={reviews}
              />
            )}
          </Stack.Screen>
          <Stack.Screen name="Collection" options={{headerShown: false}}>
            {props => <Collection userCollection={userCollection} />}
          </Stack.Screen>
          <Stack.Screen name="Menu" options={{headerShown: false}}>
            {props => <Menu isLoggedIn={isLoggedIn} userLogOut={userLogOut} />}
          </Stack.Screen>

          {/* Other screens */}
          <Stack.Screen name="SearchResult" options={{headerShown: false}}>
            {props => <SearchResult stores={stores} onSearch={onSearch} />}
          </Stack.Screen>
          <Stack.Screen name="LogIn" options={{headerShown: false}}>
            {props => <LogIn userLogIn={userLogIn} />}
          </Stack.Screen>
          <Stack.Screen name="SignUp" options={{headerShown: false}}>
            {props => <SignUp userSignUp={userSignUp} />}
          </Stack.Screen>
        </Stack.Navigator>
        <NavigationBar isLoggedIn={isLoggedIn} stores={stores} />
      </View>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 35,
  },
});

export default App;
