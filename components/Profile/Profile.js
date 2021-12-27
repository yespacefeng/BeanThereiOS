import React from 'react';
import {StyleSheet, ScrollView, SafeAreaView} from 'react-native';

import UserDetails from './UserDetails';
import RecentReviews from './RecentReviews';
import RecentCheckIns from './RecentCheckIns';

const Profile = ({username, numberOfReviews, numberOfLikes, reviews}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <UserDetails
          username={username}
          numberOfReviews={numberOfReviews}
          numberOfLikes={numberOfLikes}
        />
        <RecentReviews reviews={reviews} />
        <RecentCheckIns />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: '#DFD7C2',
  },
});

export default Profile;
