import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Dimensions
} from 'react-native';
import {styles} from './styles';

export default class Fancy extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.box}>

                </View>
                <Text style={styles.text}>Fancy</Text>
            </View>
        )
    }
}

