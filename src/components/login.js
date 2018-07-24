import React, { createClass } from 'react-native';
var {
    View,
    Text,
    StyleSheet
} = React;

export default createClass({
    render: function () {
        return (
            <View style={styles.container}>
                <Text style={{ color: 'white' }}>SendBird JavaScript SDK!!!</Text>
            </View>
        );
    }
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
        // backgroundColor: '#6E5BAA'
    }
});
