import React, { createClass } from 'react-native';
var {
    Navigator,
    StyleSheet
} = React;

import Login from './components/login';

var ROUTES = {
    login: Login
};

export default createClass({
    renderScene: function (route, navigator) {
        var Component = ROUTES[route.name];
        return <Component route={route} navigator={navigator} />;
    },
    render: function () {
        return (
            <Navigator
                style={styles.container}
                initialRoute={{ name: 'login' }}
                renderScene={this.renderScene}
                configureScene={() => { return Navigator.SceneConfigs.FloatFromRight; }}
            />
        );
    }
});

var styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
