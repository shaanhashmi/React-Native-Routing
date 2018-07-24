import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';


export default class Logo extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Image
                    source={{ uri: 'https://facebook.github.io/react/logo-og.png' }}
                    style={{ width: 70, height: 70 }}
                // source={require('../images/logo.png')} 
                />
                <Text style={styles.logoText}>React Native</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    logoText: {
        marginVertical: 15,
        fontSize: 18,
        color: 'rgba(255, 255, 255, 0.7)'
    }

});
