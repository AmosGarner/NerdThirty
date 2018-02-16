import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,

} from 'react-native';

export default class LocationBlock extends Component<{},{}>{
    render(){
        return(
            <View style={this.props.style}>
                <Text>Location: </Text>
                <Text>{this.props.location.city} ,{this.props.location.state}</Text>
                <Text>{this.props.location.latitude}&deg;N  : {this.props.location.longitude}&deg;S</Text>
            </View>
        );
    }
}