import React, { Component } from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';
import { createStackNavigator } from 'react-navigation';

import Login from './pages/Login';
import Signup from './pages/Signup';

export default class Routes extends React.Component {
    render() {
        return (
            <AppNavigator />
            /*<Router>
                <Stack key="root" hideNavBar={true}>
                    <Scene key="login" component={Login} title="Login" initial={true} />
                    <Scene key="signup" component={Signup} title="Register" />
                </Stack>
            </Router>*/
        )
    }
}

const AppNavigator = createStackNavigator(
    {
        Login: { screen: Login, },
        Signup: { screen: Signup }
    },
    {
        initialRoute: Login,
        headerMode: 'none'
    }
)