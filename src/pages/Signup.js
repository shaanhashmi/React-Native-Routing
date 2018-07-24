import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { Actions } from 'react-native-router-flux';

import Logo from '../components/Logo';
import Form from '../components/Form'

export class Signup extends React.Component {
    render() {
        return (
            <ImageBackground source={require('../images/background.png')} style={styles.container}>
                <Logo />
                <Form type="Signup" />
                <View style={styles.signupTextCont}>
                    <Text style={styles.signupText}>Already have an account! </Text>
                    <Text style={styles.signupButton} onPress={() => this.props.navigation.push('Login')}>Sing in</Text>
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#455a64',
    },
    signupTextCont: {
        alignItems: 'flex-end',
        justifyContent: 'center',
        flexGrow: 1,
        paddingVertical: 16,
        flexDirection: 'row'
    },
    signupText: {
        color: 'rgba(255,255,255,0.7)'
    },
    signupButton: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '500'
    }

});

export default Signup;
