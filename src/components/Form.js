import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';


export default class Form extends Component {

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.inputBox}
          underlineColorAndroid='rgba(0,0,0,0)'
          placeholder='Username'
          placeholderTextColor='#ffffff' />
        {this.props.type === 'Signup' ? <TextInput
          style={styles.inputBox}
          underlineColorAndroid='rgba(0,0,0,0)'
          placeholder='Email'
          placeholderTextColor='#ffffff' /> : null}
        {this.props.type === 'Signup' ? <TextInput
          style={styles.inputBox}
          underlineColorAndroid='rgba(0,0,0,0)'
          placeholder='Mobile'
          placeholderTextColor='#ffffff' /> : null}
        <TextInput
          style={styles.inputBox}
          underlineColorAndroid='rgba(0,0,0,0)'
          placeholder='Password'
          secureTextEntry={true}
          placeholderTextColor='#ffffff' />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>{this.props.type}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logoText: {
    marginVertical: 15,
    fontSize: 18,
    color: 'rgba(255, 255, 255, 0.7)'
  },
  inputBox: {
    width: 300,
    backgroundColor: '#607D8B',
    borderRadius: 25,
    paddingHorizontal: 20,
    fontSize: 16,
    color: '#ffffff',
    marginVertical: 5,
    opacity: 0.8
  },
  button: {
    width: 300,
    backgroundColor: '#1c313a',
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 12
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center'
  }

});
