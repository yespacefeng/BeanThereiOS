import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableHighlight,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

const SignUp = ({userSignUp}) => {
  const navigation = useNavigation();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirm, setConfirm] = useState();
  const [errorCode, setErrorCode] = useState();

  const onLogInPress = () => {
    navigation.pop();
    navigation.push('LogIn');
  };

  const onSignUpPress = () => {
    if (password !== confirm) {
      setErrorCode('Password does not match');
    } else {
      auth()
        .createUserWithEmailAndPassword(email, password)
        .then(userCridentials => {
          userSignUp(firstName, lastName, userCridentials.user.uid);
          navigation.goBack();
        })
        .catch(error => {
          console.log(error.code);
          if (error.code === 'auth/email-already-in-use') {
            setErrorCode('E-mail already in use');
          } else if (error.code === 'auth/weak-password') {
            setErrorCode('Weak password');
          }
        });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      {errorCode && <Text style={styles.error}>{errorCode}</Text>}
      <TextInput
        style={styles.input}
        onChangeText={setFirstName}
        value={firstName}
        placeholder="First Name"
      />
      <TextInput
        style={styles.input}
        onChangeText={setLastName}
        value={lastName}
        placeholder="Last Name"
      />
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
      <TextInput
        style={styles.input}
        onChangeText={setConfirm}
        value={confirm}
        placeholder="Confirm Password"
        secureTextEntry={true}
      />
      <TouchableHighlight onPress={onSignUpPress}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </View>
      </TouchableHighlight>
      <Text style={styles.text}>
        Already have an account,{' '}
        <Text style={styles.signup} onPress={onLogInPress}>
          login
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
  error: {
    color: '#FF0000',
  },
});

export default SignUp;
