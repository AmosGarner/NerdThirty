import React,{Component} from 'react';
import {
    View,
    Text,
    Button
}from 'react-native';

export default class TodoScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Todo!</Text>
            </View>
        );
    }
}