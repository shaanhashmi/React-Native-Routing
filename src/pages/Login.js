import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { Actions } from 'react-native-router-flux';



import Logo from '../components/Logo';
import Form from '../components/Form'

export default class Login extends React.Component {

    // static navigationOptions = {
    //     title: 'Login',
    // };
    render() {
        return (
            <ImageBackground source={require('../images/back.jpg')} style={styles.container}>
                <Logo />
                <Form type="Login" />
                <View style={styles.signupTextCont}>
                    <Text style={styles.signupText}>Don't have an account yet? </Text>
                    <Text style={styles.signupButton} onPress={() => this.props.navigation.navigate('Signup')}>Signup</Text>
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
        width: null,
        height: null,
        backgroundColor: 'rgba(0, 0, 0, 0)',
        resizeMode: 'contain'
    },
    signupTextCont: {
        alignItems: 'flex-end',
        justifyContent: 'center',
        flexGrow: 1,
        paddingVertical: 16,
        flexDirection: 'row',
        opacity: 0.8
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
