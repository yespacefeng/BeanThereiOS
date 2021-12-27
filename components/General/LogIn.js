import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableHighlight,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const LogIn = ({userLogIn}) => {
  const navigation = useNavigation();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const onLogInPress = () => {
    userLogIn(); // Send username, userId back to app.js
    navigation.goBack();
  };

  const onSignUpPress = () => {
    navigation.pop();
    navigation.push('SignUp');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>LogIn</Text>
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="E-mail"
      />
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        placeholder="Password"
        secureTextEntry={true}
      />
      <TouchableHighlight onPress={onLogInPress}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </View>
      </TouchableHighlight>
      <Text style={styles.text}>
        Don't have an account,{' '}
        <Text style={styles.signup} onPress={onSignUpPress}>
          sign up
        </Text>
      </Text>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
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
    marginLeft: 20,
    marginRight: 20,
    shadowColor: 'black',
    shadowOffset: {height: 3, width: 3},
    shadowOpacity: 0.5,
  },
  buttonText: {
    fontSize: 24,
    fontStyle: 'italic',
  },
  text: {
    fontSize: 16,
    marginTop: 10,
  },
  signup: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default LogIn;
