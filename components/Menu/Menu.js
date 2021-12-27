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

const Menu = ({isLoggedIn, userLogOut}) => {
  const navigation = useNavigation();

  const onLogOutPress = () => {
    userLogOut();
    navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
        <View style={styles.innerContainer}>
          <Text style={styles.title}>Menu</Text>
          <View style={styles.section}>
            <Text style={styles.headline}>Account Activities</Text>
            <Text style={styles.option}>Recent Views</Text>
            <Text style={styles.option}>Recent Reviews</Text>
            <Text style={styles.option}>Search History</Text>
            <Text style={styles.option}>Collection</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.headline}>User Information</Text>
            <Text style={styles.option}>Profile</Text>
            <Text style={styles.option}>Edit Profile</Text>
            <Text style={styles.option}>Preferances</Text>
          </View>
          <TouchableHighlight
            style={styles.logoutContainer}
            onPress={() => onLogOutPress()}>
            <Text style={styles.logout}>Log Out</Text>
          </TouchableHighlight>
        </View>
      </ScrollView>
    </SafeAreaView>
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
  scroll: {
    width: '100%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  section: {
    width: '90%',
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    margin: 5,
  },
  headline: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 5,
  },
  option: {
    fontSize: 16,
    marginLeft: 5,
    marginBottom: 5,
  },
  logoutContainer: {
    width: '90%',
    padding: 5,
    borderColor: '#FF0000',
    borderTopWidth: 2,
    borderBottomWidth: 2,
    margin: 5,
  },
  logout: {
    textAlign: 'center',
    fontSize: 16,
    color: '#FF0000',
  },
});

export default Menu;
